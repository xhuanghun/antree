package com.antree.action;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.net.URL;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.namespace.QName;

import net.sf.json.JSONArray;

import org.apache.commons.collections.ListUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.dom4j.DocumentHelper;
import org.dom4j.Document;
import org.dom4j.Element;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.antree.annotation.Auth;
import com.antree.bean.PictureInfo;
import com.antree.bean.QRCode;
import com.antree.bean.SysMenu;
import com.antree.bean.AnTree;
import com.antree.bean.Patrol;
import com.antree.bean.SysMenuBtn;
import com.antree.bean.SysUser;
import com.antree.bean.SysLog;
import com.antree.bean.TreeNode;
import com.antree.bean.BaseBean.DELETED;
import com.antree.bean.BaseBean.STATE;
import com.antree.model.SiteMainModel;
import com.antree.service.SysMenuBtnService;
import com.antree.service.SysMenuService;
import com.antree.service.SysUserService;
import com.antree.service.SysLogService;
import com.antree.service.AnTreeService;
import com.antree.service.QRCodeService;
import com.antree.service.ExceptionService;
import com.antree.service.PatrolService;
import com.antree.service.PictureInfoService;
import com.antree.utils.DateUtil;
import com.antree.utils.HtmlUtil;
import com.antree.utils.MethodUtil;
import com.antree.utils.SessionUtils;
import com.antree.utils.StringUtil;
import com.antree.utils.TreeUtil;
import com.antree.utils.URLUtils;
import com.antree.utils.Constant.SuperAdmin;
import com.antree.action.BaseAction;

import org.json.JSONException;
import org.jsoup.Jsoup;
import org.jsoup.select.*;
import sun.misc.BASE64Encoder;


@Controller
public class MainAction extends BaseAction {
private final static Logger log= Logger.getLogger(MainAction.class);
	
	@Autowired(required=false) 
	private SysMenuService<SysMenu> sysMenuService; 
	
	@Autowired(required=false) 
	private SysUserService<SysUser> sysUserService; 
	
	@Autowired(required=false) 
	private SysMenuBtnService<SysMenuBtn> sysMenuBtnService;
	
	@Autowired(required=false)
	private SysLogService<SysLog> sysLogService;
	
	@Autowired(required=false)
	private AnTreeService<AnTree> anTreeService;
	
	@Autowired(required=false)
	private ExceptionService<Exception> exceptionService;
	
	@Autowired(required=false)
	private PatrolService<Patrol> patrolService;
	
	@Autowired(required=false)
	private PictureInfoService<PictureInfo> pictureInfoService;
	
	@Autowired(required=false)
	private QRCodeService<QRCode> qRCodeService;
	
	@Auth(verifyLogin=false,verifyURL=false)
	@RequestMapping("/login")
	public ModelAndView  login(HttpServletRequest request,HttpServletResponse response) throws Exception{
		Map<String,Object>  context = getRootMap();
		return forword("login", context);
	}
	
	
	@Auth(verifyLogin=false,verifyURL=false)
	@RequestMapping("/toLogin")
	public void  toLogin(String login,String pwd,String verifyCode,HttpServletRequest request,HttpServletResponse response) throws Exception{
		String vcode  = SessionUtils.getValidateCode(request);
		SessionUtils.removeValidateCode(request);
		request.setCharacterEncoding("GB2312");
		if(StringUtils.isBlank(verifyCode)){
			sendFailureMessage(response, "验证码不能为空.");
			return;
		}
		if(!verifyCode.toLowerCase().equals(vcode)){
			sendFailureMessage(response, "验证码输入错误.");
			return;
		}
		if(StringUtils.isBlank(login)){    
			sendFailureMessage(response, "账号不能为空.");
			return;
		}
		if(StringUtils.isBlank(pwd)){
			sendFailureMessage(response, "密码不能为空.");
			return;
		}
		String msg = "用户登录日志:";
		SysLog bean=new SysLog();
		SysUser user = sysUserService.queryLogin(login, MethodUtil.MD5(pwd));  //email
		if(user == null){			
			sendFailureMessage(response, "账号或者密码输入错误.");
			return;
		}
		if(STATE.DISABLE.key == user.getState()){
			sendFailureMessage(response, "账号已被禁用.");
			return;
		}
		int loginCount = 0;
		if(user.getLoginCount() != null){
			loginCount = user.getLoginCount();
		}
		user.setLoginCount(loginCount+1);
		user.setLoginTime(DateUtil.getDateByString(""));
		sysUserService.update(user);
		bean.setLogin(login);
		bean.setContent("用户登录");
		bean.setName(user.getNickName());
		String ip="";
		bean.setIpAddrs(ip);
		bean.setModel("后台");
		bean.setCount(1);
		bean.setPtype(1);
		sysLogService.add(bean);		
		SessionUtils.setUser(request,user);
		sendSuccessMessage(response, "登录成功.");
	}
	@Auth(verifyLogin=false,verifyURL=false)
	@RequestMapping("/mLogin")
	public void  mLogin(String username,String password,HttpServletRequest request,HttpServletResponse response) throws Exception{
		Map<String, Object> result = new HashMap<String, Object>();
    	if(username!=null){
    		SysUser user = sysUserService.queryLogin(username, MethodUtil.MD5(password));  //email
    		if(user != null){
    			result.put(SUCCESS, true);
    			result.put("result", user);
    			HtmlUtil.writerJson(response, result);
    		}
    		else
    		{
    			result.put(SUCCESS, false);
    			result.put("result", null);
    			HtmlUtil.writerJson(response, result);
    		}
    	}      	
	}
	
    @Auth(verifyLogin=false,verifyURL=false)
	@RequestMapping("/mAnTreeQuery")
	public void  mAnTreeQuery(String value,HttpServletRequest request,HttpServletResponse response) throws Exception{
		Map<String, Object> result = new HashMap<String, Object>();
		List<AnTree> list = anTreeService.getAnTreeByWhere(value);
		result.put(SUCCESS, true);
		result.put("result", list);
		HtmlUtil.writerJson(response, result); 	
	}
	
    @Auth(verifyLogin=false,verifyURL=false)
	@RequestMapping("/mAnTreeByCode")
	public void  mAnTreeByCode(String code,HttpServletRequest request,HttpServletResponse response) throws Exception{
		Map<String,Object> result = new HashMap<String,Object>();
		AnTree bean = anTreeService.getAnTreeByCode(code);
		List<PictureInfo> pictureList = pictureInfoService.queryByCode(code);
		for(int i=0;i<pictureList.size();i++){
			String filePath = pictureList.get(i).getTplj();
			String realPath = request.getSession().getServletContext().getRealPath(filePath);
			File tempfile = new File(realPath);
            if(tempfile.exists()){
            	FileInputStream in = null;
            	byte[] bytes=null;
        		ByteArrayOutputStream baos = null;
        		String base64="";
        		try {
        			in = new FileInputStream(tempfile);
        			baos = new ByteArrayOutputStream();
        			IOUtils.copy(in, baos);
        			bytes = baos.toByteArray();
        			BASE64Encoder encode = new BASE64Encoder(); 
        			base64 = encode.encode(bytes); 
        		} catch (Exception e) {
        			
        		} finally {
        			IOUtils.closeQuietly(in);
        			IOUtils.closeQuietly(baos);
        		}
        		pictureList.get(i).setZpxxStr(base64);
            }			
		}
		QRCode qrcode = qRCodeService.queryByCode(code);
		if(qrcode != null){
			BASE64Encoder encode = new BASE64Encoder(); 
			String btStr = encode.encode(qrcode.getEwmtp());
			qrcode.setEwmtpStr(btStr);
		}		
		result.put(SUCCESS, true);
		result.put("antree", bean);
		result.put("picture", pictureList);
		result.put("qrcode", qrcode);
		HtmlUtil.writerJson(response, result);  	
	}	
	
	    @Auth(verifyLogin=false,verifyURL=false)
		@RequestMapping("/mPatrolUploadByCode")
		public void  mPatrolUploadByCode(String code,byte[] mbyte,String xcqk,HttpServletRequest request,HttpServletResponse response) throws Exception{
			Map<String, Object> result = new HashMap<String, Object>();
			Patrol bean= new Patrol();
            bean.setCode(code);
            bean.setXctp(mbyte);
            bean.setXcqk(xcqk);
			try{
				patrolService.add(bean);
				result.put(SUCCESS, true);
				HtmlUtil.writerJson(response, result);
			} catch (Exception e) {
				result.put(SUCCESS, false);
				HtmlUtil.writerJson(response, result);
			}		
			
		}
		
		@Auth(verifyLogin=false,verifyURL=false)
		@RequestMapping("/mPatrolByList")
		public void  mPatrolByList(HttpServletRequest request,HttpServletResponse response) throws Exception{
			Map<String, Object> result = new HashMap<String, Object>();
			List<Patrol> bean = patrolService.queryByAllList();

			if(bean != null){
				result.put(SUCCESS, true);
				result.put("result", bean);
				HtmlUtil.writerJson(response, result);
			}
			else
			{
				result.put(SUCCESS, false);
				result.put("result", null);
				HtmlUtil.writerJson(response, result);
			}  	
		}
		
		@Auth(verifyLogin=false,verifyURL=false)
		@RequestMapping("/mPatrolByCode")
		public void  mPatrolByCode(String code,HttpServletRequest request,HttpServletResponse response) throws Exception{
			Map<String, Object> result = new HashMap<String, Object>();
			Patrol bean = patrolService.queryByCode(code);

			if(bean != null){
				result.put(SUCCESS, true);
				result.put("result", bean);
				HtmlUtil.writerJson(response, result);
			}
			else
			{
				result.put(SUCCESS, false);
				result.put("result", null);
				HtmlUtil.writerJson(response, result);
			}  	
		}
		
		@Auth(verifyLogin=false,verifyURL=false)
		@RequestMapping("/mExceptionByCode")
		public void  mExceptionByCode(String code,HttpServletRequest request,HttpServletResponse response) throws Exception{
			Map<String, Object> result = new HashMap<String, Object>();
			Exception bean = exceptionService.queryByCode(code);

			if(bean != null){
				result.put(SUCCESS, true);
				result.put("result", bean);
				HtmlUtil.writerJson(response, result);
			}
			else
			{
				result.put(SUCCESS, false);
				result.put("result", null);
				HtmlUtil.writerJson(response, result);
			}  	
		}
		
		@Auth(verifyLogin=false,verifyURL=false)
		@RequestMapping("/mExceptionUploadByCode")
		public void  mExceptionUploadByCode(String code,String gsycqk,String yjsj,String yjly,String yjjb,String bz,HttpServletRequest request,HttpServletResponse response) throws Exception{
			Map<String, Object> result = new HashMap<String, Object>();
			Exception bean = exceptionService.queryByCode(code);

			if(bean != null){
				result.put(SUCCESS, true);
				result.put("result", bean);
				HtmlUtil.writerJson(response, result);
			}
			else
			{
				result.put(SUCCESS, false);
				result.put("result", null);
				HtmlUtil.writerJson(response, result);
			}  	
		}
		
		@Auth(verifyLogin=false,verifyURL=false)
		@RequestMapping("/mAnTreeByList")
		public void  mAnTreeByList(HttpServletRequest request,HttpServletResponse response) throws Exception{
			Map<String, Object> result = new HashMap<String, Object>();
			List<AnTree> bean = anTreeService.queryByAllList();

			if(bean != null){
				result.put(SUCCESS, true);
				result.put("result", bean);
				HtmlUtil.writerJson(response, result);
			}
			else
			{
				result.put(SUCCESS, false);
				result.put("result", null);
				HtmlUtil.writerJson(response, result);
			}  	
		}
		
	
	
	@RequestMapping("/getAdds")
	public ModelAndView  getInputView(HttpServletRequest request,HttpServletResponse response) throws Exception{
		Map<String,Object>  context = getRootMap();
		return forword("enter/enterRoad", context);
	}
	
	
	@Auth(verifyLogin=false,verifyURL=false)
	@RequestMapping("/logout")
	public void  logout(HttpServletRequest request,HttpServletResponse response) throws Exception{
		try	{
			SysLog bean=new SysLog();
			SysUser user=SessionUtils.getUser(request);
			bean.setLogin(user.getLogin());
			bean.setContent("用户退出");
			bean.setName(user.getNickName());
			String ip="";
			bean.setIpAddrs(ip);
			bean.setModel("后台");
			bean.setCount(1);
			bean.setPtype(1);
			sysLogService.add(bean);
		}
		catch(Exception ex){
			
		}		
	}
	
	@Auth(verifyURL=false)
	@RequestMapping("/getActionBtn")
	public void  getActionBtn(String url,HttpServletRequest request,HttpServletResponse response) throws Exception{
		Map<String, Object> result = new HashMap<String, Object>();
		List<String> actionTypes = new ArrayList<String>();
		if(SessionUtils.isAdmin(request)){
			result.put("allType", true);
		}else{
			String menuUrl = URLUtils.getReqUri(url);
			menuUrl = StringUtils.remove(menuUrl,request.getContextPath());
			actionTypes = SessionUtils.getMemuBtnListVal(request, StringUtils.trim(menuUrl));
			result.put("allType", false);
			result.put("types", actionTypes);
		}
		result.put(SUCCESS, true);
		HtmlUtil.writerJson(response, result);
	}
		
	
	@Auth(verifyURL=false)
	@RequestMapping("/modifyPwd")
	public void modifyPwd(String oldPwd,String newPwd,HttpServletRequest request,HttpServletResponse response) throws Exception{
		SysUser user = SessionUtils.getUser(request);
		if(user == null){
			sendFailureMessage(response, "对不起,登录超时.");
			return;
		}
		SysUser bean  = sysUserService.queryById(user.getId());
		if(bean.getId() == null || DELETED.YES.key == bean.getDeleted()){
			sendFailureMessage(response, "对不起,用户不存在.");
			return;
		}
		if(StringUtils.isBlank(newPwd)){
			sendFailureMessage(response, "密码不能为空.");
			return;
		}
		if(!MethodUtil.ecompareMD5(oldPwd,bean.getPwd())){
			sendFailureMessage(response, "旧密码输入不匹配.");
			return;
		}
		bean.setPwd(MethodUtil.MD5(newPwd));
		sysUserService.update(bean);
		sendSuccessMessage(response, "Save success.");
	}
	
	@Auth(verifyURL=false)
	@RequestMapping("/main") 
	public ModelAndView  main(SiteMainModel model,HttpServletRequest request) throws IOException{
		Map<String,Object>  context = getRootMap();
		SysUser user = SessionUtils.getUser(request);
		List<SysMenu> rootMenus = null;
		List<SysMenu> childMenus = null;
		List<SysMenuBtn> childBtns = null;
		if(user != null && SuperAdmin.YES.key ==  user.getSuperAdmin()){
			rootMenus = sysMenuService.getRootMenu(null);
			childMenus = sysMenuService.getChildMenu();
		}else{
			rootMenus = sysMenuService.getRootMenuByUser(user.getId() );
			childMenus = sysMenuService.getChildMenuByUser(user.getId());
			childBtns = sysMenuBtnService.getMenuBtnByUser(user.getId());
			buildData(childMenus,childBtns,request); 
		}		
		
		context.put("user", user);
		context.put("menuList", treeMenu(rootMenus,childMenus));
		return forword("main/main",context); 
	}
	
	private List<TreeNode> treeMenu(List<SysMenu> rootMenus,List<SysMenu> childMenus){
		TreeUtil util = new TreeUtil(rootMenus,childMenus);
		return util.getTreeNode();
	}
	
	
	private void buildData(List<SysMenu> childMenus,List<SysMenuBtn> childBtns,HttpServletRequest request){
		List<String> accessUrls  = new ArrayList<String>();
		Map<String,List> menuBtnMap = new HashMap<String,List>(); 
		for(SysMenu menu: childMenus){
			if(StringUtils.isNotBlank(menu.getUrl())){
				List<String> btnTypes = new ArrayList<String>();
				for(SysMenuBtn btn  : childBtns){
					if(menu.getId().equals(btn.getMenuid())){
						btnTypes.add(btn.getBtnType());
						URLUtils.getBtnAccessUrls(menu.getUrl(), btn.getActionUrls(),accessUrls);
					}
				}
				menuBtnMap.put(menu.getUrl(), btnTypes);
				URLUtils.getBtnAccessUrls(menu.getUrl(), menu.getActions(),accessUrls);
				accessUrls.add(menu.getUrl());
			}
		}
		SessionUtils.setAccessUrl(request, accessUrls);
		SessionUtils.setMemuBtnMap(request, menuBtnMap);
	}
}
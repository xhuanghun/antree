package com.antree.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


import com.antree.bean.SysMenu;
import com.antree.bean.SysRole;
import com.antree.bean.SysRoleRel;
import com.antree.bean.SysUser;
import com.antree.bean.SysLog;
import com.antree.model.SysMenuModel;
import com.antree.model.SysUserModel;
import com.antree.service.SysRoleService;
import com.antree.service.SysUserService;
import com.antree.service.SysLogService;  
import com.antree.utils.HtmlUtil;
import com.antree.utils.MethodUtil;
import com.antree.utils.SessionUtils;
import com.antree.utils.Constant.SuperAdmin;
import com.antree.bean.SysUser;
import com.antree.bean.BaseBean.DELETED;
import com.antree.bean.BaseBean.STATE;
import com.antree.exception.ServiceException;
import com.antree.model.SysUserModel;
 
@Controller
@RequestMapping("/sysUser") 
public class SysUserAction extends BaseAction{
	
	private final static Logger log= Logger.getLogger(SysUserAction.class);
	
	private static String pass="";
	@Autowired(required=false) 
	private SysUserService<SysUser> sysUserService; 
	
	@Autowired(required=false)
	private SysLogService<SysLog> sysLogService;
	
	@Autowired(required=false) 
	private SysRoleService<SysRole> sysRoleService; 
	@RequestMapping("/list") 
	public ModelAndView  list(SysUserModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();
		SysUser user = SessionUtils.getUser(request);
        if(user.getSuperAdmin() != SuperAdmin.YES.key){
        	model.setSuperAdmin(0);
		}else{
			model.setSuperAdmin(null);
		}
		List<SysUser> dataList = sysUserService.queryByList(model);
		context.put("dataList", dataList);
		return forword("sys/sysUser",context); 
	}
	
	
	@RequestMapping("/dataList") 
	public void  dataList(SysUserModel model,HttpServletResponse response,HttpServletRequest request) throws Exception{
		SysUser usertmp = SessionUtils.getUser(request);
        if(usertmp.getSuperAdmin() != SuperAdmin.YES.key){
        	model.setSuperAdmin(0);
		}else{
			model.setSuperAdmin(null);
		}
		List<SysUser> dataList = sysUserService.queryByList(model);
		for(SysUser user: dataList){
			List<SysRole> list = sysRoleService.queryByUserid(user.getId());
			user.setRoleStr(rolesToStr(list));
		}
		Map<String,Object> jsonMap = new HashMap<String,Object>();
		jsonMap.put("total",model.getPager().getRowCount());
		jsonMap.put("rows", dataList);
		HtmlUtil.writerJson(response, jsonMap);
	}
	
	private String rolesToStr(List<SysRole> list){
		if(list == null || list.isEmpty()){
			return null;
		}
		StringBuffer str = new StringBuffer();
		for(int i=0;i<list.size();i++){
			SysRole role = list.get(i);
			str.append(role.getRoleName());
			if((i+1) < list.size()){
				str.append(",");
			}
		}
		return str.toString();
	}
	
	@RequestMapping("/save")
	public void save(SysUser bean,String pwd,HttpServletResponse response) throws Exception{
		Map<String,Object>  context = new HashMap<String,Object>();
		int count = sysUserService.getUserCountByLogin(bean.getLogin());
		if(bean.getId() == null){
			if(count > 0){
				throw new ServiceException("用户已存在.");
			}
			bean.setDeleted(DELETED.NO.key);
			bean.setPwd(MethodUtil.MD5(pwd));
            sysUserService.add(bean);
		}else{
			if(count > 1){
				throw new ServiceException("用户已存在.");
			}
			if(!pass.equals(pwd)){   
			   bean.setPwd(MethodUtil.MD5(pwd));
		    }
			sysUserService.updateBySelective(bean);
		}
		sendSuccessMessage(response, "保存成功~");
	}
	
	@RequestMapping("/getId")
	public void getId(Integer id,HttpServletResponse response) throws Exception{
		Map<String,Object>  context = getRootMap();
		SysUser bean  = sysUserService.queryById(id);
		if(bean  == null){
			sendFailureMessage(response, "没有找到对应的记录!");
			return;
		}
		context.put(SUCCESS, true);
		pass=bean.getPwd();
		context.put("data", bean);
		HtmlUtil.writerJson(response, context);
	}
	
	@RequestMapping("/delete")
	public void delete(Integer[] id,HttpServletResponse response) throws Exception{
		sysUserService.delete(id);
		sendSuccessMessage(response, "删除成功");
	}
	
	
	@RequestMapping("/updatePwd")
	public void updatePwd(Integer id,String oldPwd,String newPwd,HttpServletRequest request,HttpServletResponse response) throws Exception{
		boolean isAdmin = SessionUtils.isAdmin(request); 
		SysUser bean  = sysUserService.queryById(id);
		if(bean.getId() == null || DELETED.YES.key == bean.getDeleted()){
			sendFailureMessage(response, "对不起 ,User is not exists.");
			return;
		}
		if(StringUtils.isBlank(newPwd)){
			sendFailureMessage(response, "Password is required.");
			return;
		}
		if(!isAdmin && !MethodUtil.ecompareMD5(oldPwd,bean.getPwd())){
			sendFailureMessage(response, "Wrong old password.");
			return;
		}
		bean.setPwd(MethodUtil.MD5(newPwd));
		sysUserService.update(bean);
		sendSuccessMessage(response, "保存成功~");
	}
	

	
	@RequestMapping("/userRole") 
	public ModelAndView  userRole(HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();
		return forword("/sys/sysUserRole", context);
	}
	
	@RequestMapping("/userList") 
	public void  userList(SysUserModel model,HttpServletResponse response,HttpServletRequest request) throws Exception{
		model.setState(STATE.ENABLE.key);
		dataList(model, response,request);
	}

	@RequestMapping("/getUser") 
	public void getUser(Integer id,HttpServletResponse response)  throws Exception{
		Map<String,Object>  context = getRootMap();
		SysUser bean  = sysUserService.queryById(id);
		if(bean  == null){
			sendFailureMessage(response, "没有找到对应的记录!");
			return;
		}
		Integer[] roleIds = null;
		Integer[] roleIdss = null;
		int i = 0;
		List<SysRoleRel>  roles  =sysUserService.getUserRole(bean.getId());
		if(roles != null){
			roleIds = new Integer[roles.size()];
			for(SysRoleRel rel : roles ){
				Integer roleState = sysRoleService.queryById(rel.getRoleId()).getState();
				if(roleState==0){
					roleIds[i] = rel.getRoleId();
					i++;
				}
			}
			roleIdss = new Integer[i];
			for(Integer o=0;o<i;o++){
				roleIdss[o] = roleIds[o];
			}
		}
		
		Map<String, Object> data = new HashMap<String, Object>();
		data.put("id", bean.getId());
		data.put("login", bean.getLogin());  //data.put("email", bean.getEmail());
		data.put("roleIds", roleIdss);
		context.put(SUCCESS, true);
		context.put("data", data);
		HtmlUtil.writerJson(response, context);
		
	}
	
	@RequestMapping("/addUserRole")
	public void addUserRole(Integer id,Integer roleIds[],HttpServletResponse response) throws Exception{
		sysUserService.addUserRole(id, roleIds);
		sendSuccessMessage(response, "保存成功");
	}
}

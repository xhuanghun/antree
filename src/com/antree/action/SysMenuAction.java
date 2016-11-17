package com.antree.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.antree.bean.SysMenu;
import com.antree.bean.SysMenuBtn;
import com.antree.bean.TreeNode;
import com.antree.bean.BaseBean.DELETED;
import com.antree.model.SysMenuModel;
import com.antree.service.SysMenuBtnService;
import com.antree.service.SysMenuService;
import com.antree.utils.HtmlUtil;
import com.antree.utils.TreeUtil;
 
@Controller
@RequestMapping("/sysMenu") 
public class SysMenuAction extends BaseAction{
	
	private final static Logger log= Logger.getLogger(SysMenuAction.class);
	
	@Autowired(required=false) 
	private SysMenuService<SysMenu> sysMenuService; 
	
	@Autowired
	private SysMenuBtnService<SysMenuBtn> sysMenuBtnService;
	
	@RequestMapping("/menu")
	public ModelAndView  menu(SysMenuModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();
		model.setDeleted(DELETED.NO.key);
		List<SysMenu> dataList = sysMenuService.queryByList(model);
		context.put("dataList", dataList);
		return forword("sys/sysMenu",context); 
	}
	
	@RequestMapping("/rootMenuJson") 
	public void  rootMenu(Integer menuId,HttpServletResponse response) throws Exception{
		List<SysMenu> dataList = sysMenuService.getRootMenu(menuId);
		if(dataList==null){
			dataList = new ArrayList<SysMenu>();
		}
		HtmlUtil.writerJson(response, dataList);
	}
	
	
	@RequestMapping("/dataList") 
	public void  dataList(SysMenuModel model,HttpServletResponse response) throws Exception{
		List<SysMenu> dataList = sysMenuService.queryByList(model);
		Map<String,Object> jsonMap = new HashMap<String,Object>();
		jsonMap.put("total",model.getPager().getRowCount());
		jsonMap.put("rows", dataList);
		HtmlUtil.writerJson(response, jsonMap);
	}
	

	
	@RequestMapping("/save")
	public void save(SysMenu bean,HttpServletRequest request,HttpServletResponse response) throws Exception{
		if(true){
			new Exception(" Test Error");
		}
		List<SysMenuBtn> btns = getReqBtns(request);
		bean.setBtns(btns);
		if(bean.getId() == null){
			bean.setDeleted(DELETED.NO.key);
			sysMenuService.add(bean);
		}else{
			sysMenuService.update(bean);
		}
		sendSuccessMessage(response, "保存成功~");
	}
	
	@RequestMapping("/getId")
	public void getId(Integer id,HttpServletResponse response) throws Exception{
		Map<String,Object>  context = new HashMap<String,Object>();
		SysMenu bean  = sysMenuService.queryById(id);
		if(bean  == null){
			sendFailureMessage(response, "没有找到对应的记录!");
			return;
		}
		List<SysMenuBtn> btns = sysMenuBtnService.queryByMenuid(id);
		bean.setBtns(btns);
		context.put(SUCCESS, true);
		context.put("data", bean);
		HtmlUtil.writerJson(response, context);
	}
	
	@RequestMapping("/delete")
	public void delete(Integer[] id,HttpServletResponse response) throws Exception{
		if(id != null && id.length > 0){
			sysMenuService.delete(id);
			sendSuccessMessage(response, "删除成功");
		}else{
			sendFailureMessage(response, "未选中记录");
		}
	}
	
	
	@RequestMapping("/getMenuTree")
	public void getMenuTree(Integer id,HttpServletResponse response) throws Exception{
		List<TreeNode> menuTree = treeMenu();
		HtmlUtil.writerJson(response, menuTree);
	}
	
	public List<TreeNode> treeMenu(){
		List<SysMenu> rootMenus = sysMenuService.getRootMenu(null);//根节点
		List<SysMenu> childMenus = sysMenuService.getChildMenu();//子节点
		List<SysMenuBtn> childBtns = sysMenuBtnService.queryByAll();
		TreeUtil util = new TreeUtil(rootMenus,childMenus,childBtns);
		return util.getTreeNode();
	}
	
	public List<SysMenuBtn> getReqBtns(HttpServletRequest request){
		List<SysMenuBtn> btnList= new ArrayList<SysMenuBtn>();
		String[] btnId  = request.getParameterValues("btnId");
		String[] btnName  = request.getParameterValues("btnName");
		String[] btnType  = request.getParameterValues("btnType");
		String[] actionUrls  = request.getParameterValues("actionUrls");
		String[] deleteFlag  = request.getParameterValues("deleteFlag");
		if(btnId!=null &&!btnId.equals("")){
			for (int i = 0; i < btnId.length; i++) {
				if(StringUtils.isNotBlank(btnName[i]) && StringUtils.isNotBlank(btnType[i])){
					SysMenuBtn btn = new SysMenuBtn();
					if(StringUtils.isNotBlank(btnId[i]) && NumberUtils.isNumber(btnId[i])){
						btn.setId(NumberUtils.toInt(btnId[i]));
					}
					btn.setBtnName(btnName[i]);
					btn.setBtnType(btnType[i]);
					btn.setActionUrls(actionUrls[i]);
					btn.setDeleteFlag(deleteFlag[i]);
					btnList.add(btn);
				}
			}
		}		
		return btnList;
	}
}


package com.antree.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.antree.bean.SysMenu;
import com.antree.bean.SysRole;
import com.antree.bean.SysRoleRel;
import com.antree.bean.SysRoleRel.RelType;
import com.antree.model.SysRoleModel;
import com.antree.service.SysMenuService;
import com.antree.service.SysRoleRelService;
import com.antree.service.SysRoleService;
import com.antree.utils.HtmlUtil;
 
@Controller
@RequestMapping("/sysRole") 
public class SysRoleAction extends BaseAction{
	
	private final static Logger log= Logger.getLogger(SysRoleAction.class);
	
	@Autowired(required=false) 
	private SysRoleService<SysRole> sysRoleService; 
	
	@Autowired(required=false) 
	private SysMenuService<SysMenu> sysMenuService; 
	@Autowired(required=false) 
	private SysRoleRelService<SysRoleRel> sysRoleRelService;
	@RequestMapping("/role")
	public ModelAndView  list(SysRoleModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();
		return forword("sys/sysRole",context); 
	}
	
	
	@RequestMapping("/dataList") 
	public void  datalist(SysRoleModel model,HttpServletResponse response) throws Exception{
		List<SysRole> dataList = sysRoleService.queryByList(model);
		Map<String,Object> jsonMap = new HashMap<String,Object>();
		jsonMap.put("total",model.getPager().getRowCount());
		jsonMap.put("rows", dataList);
		HtmlUtil.writerJson(response, jsonMap);
	}
	
	@RequestMapping("/save")
	public void save(SysRole bean,Integer[] menuIds,Integer[] btnIds,HttpServletResponse response) throws Exception{
		if(bean.getId() == null){
			String RoleName = bean.getRoleName().trim();
			SysRoleModel rolemModel = new SysRoleModel();
			rolemModel.setRoleName(RoleName);
			if(sysRoleService.queryByCount(rolemModel)>0){
				sendFailureMessage(response, "该角色名称已存在，保存失败!");
				return;
			}
			sysRoleService.add(bean,menuIds,btnIds);
		}else{
			sysRoleService.update(bean,menuIds,btnIds);
		}
		sendSuccessMessage(response, "保存成功~");
	}
	
	
	@RequestMapping("/getId")
	public void getId(Integer id,HttpServletResponse response) throws Exception{
		Map<String,Object>  context = new HashMap<String,Object> ();
		SysRole bean  = sysRoleService.queryById(id);
		if(bean  == null){
			sendFailureMessage(response, "没有找到对应的记录!");
			return;
		}
		Integer[] menuIds = null;
		List<SysMenu> menuList =  sysMenuService.getMenuByRoleId(id);
		if(menuList != null){
			menuIds = new Integer[menuList.size()];
			int i = 0;
			for(SysMenu item : menuList){
				menuIds[i] = item.getId();
				i++;
			}
		}
		Integer[] btnIds = null;
		List<SysRoleRel>  btnList =sysRoleRelService.queryByRoleId(id, RelType.BTN.key);
		if(btnList != null){
			btnIds = new Integer[btnList.size()];
			int i = 0;
			for(SysRoleRel item : btnList){
				btnIds[i] = item.getObjId();
				i++;
			}
		}

		Map<String,Object> data = BeanUtils.describe(bean);
		data.put("menuIds", menuIds);
		data.put("btnIds", btnIds);
		context.put(SUCCESS, true);
		context.put("data", data);
		HtmlUtil.writerJson(response, context);
	}
	
	
	
	@RequestMapping("/delete")
	public void delete(Integer[] id,HttpServletResponse response) throws Exception{
		sysRoleService.delete(id);
		sendSuccessMessage(response, "删除成功");
	}
	
	
	
	@RequestMapping("/loadRoleList")
	public void loadRoleList(HttpServletResponse response) throws Exception{
		List<SysRole>  roloList = sysRoleService.queryAllList();
		HtmlUtil.writerJson(response, roloList);
	}


	
	
}

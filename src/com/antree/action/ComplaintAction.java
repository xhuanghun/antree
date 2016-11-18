package com.antree.action;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.antree.bean.AnTree;
import com.antree.bean.Complaint;
import com.antree.bean.PictureInfo;
import com.antree.bean.SysLog;
import com.antree.bean.SysMenu;
import com.antree.bean.SysMenuBtn;
import com.antree.bean.BaseBean.DELETED;
import com.antree.service.SysLogService;  
import com.antree.model.AnTreeModel;
import com.antree.model.ComplaintModel;
import com.antree.service.ComplaintService;
import com.antree.utils.Constant;
import com.antree.utils.HtmlUtil;
import com.antree.utils.ObjectUtil;
import com.antree.utils.StringUtil;
 
@Controller
@RequestMapping("/complaint") 
public class ComplaintAction extends BaseAction{
	
	private final static Logger log= Logger.getLogger(ComplaintAction.class);

	@Autowired(required=false) 
	private ComplaintService<Complaint> complaintService; 
	
	@Autowired(required=false)
	private SysLogService<SysLog> sysLogService;
	
	
	
	@RequestMapping("/list") 
	public ModelAndView  list(ComplaintModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();				
		return forword("complaint/complaintInfo",context); 
	}
	
	@RequestMapping("/query") 
	public ModelAndView  query(ComplaintModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();				
		return forword("complaint/complaintQuery",context); 
	}
	
	@RequestMapping("/create") 
	public ModelAndView  create(ComplaintModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();		
		List<Complaint> dataList = complaintService.queryByList(model);
		context.put("dataList", dataList);
		return forword("complaint/complaintAdd",context); 
	}
	
	
	
	@RequestMapping("/dataList") 
	public void  dataList(ComplaintModel model,HttpServletResponse response,HttpServletRequest request) throws Exception{
		List<Complaint> dataList = complaintService.queryByList(model);
		//设置页面数据
		Map<String,Object> jsonMap = new HashMap<String,Object>();
		jsonMap.put("total",model.getPager().getRowCount());
		jsonMap.put("rows", dataList);
		HtmlUtil.writerJson(response, jsonMap);
	}	
	@RequestMapping("/getId")
	public void getId(Complaint id,HttpServletResponse response) throws Exception{
		Map<String,Object>  context = new HashMap<String,Object>();
		Complaint bean  = complaintService.queryById(id);
		if(bean  == null){
			sendFailureMessage(response, "没有找到对应的记录!");
			return;
		}
		context.put(SUCCESS, true);
		context.put("data", bean);
		HtmlUtil.writerJson(response, context);
	}
	@RequestMapping("/save")
	public void save(Complaint bean,String pwd,HttpServletResponse response) throws Exception{
		if(bean.getId() == null){
			complaintService.add(bean);
		}else{
			complaintService.update(bean);
		}
		sendSuccessMessage(response, "保存成功~");
	}
	
	@RequestMapping("/delete")
	public void delete(Integer[] id,HttpServletResponse response) throws Exception{
		if(id != null && id.length > 0){
			complaintService.delete(id);
			sendSuccessMessage(response, "删除成功");
		}else{
			sendFailureMessage(response, "未选中记录");
		}
	}
	
	@RequestMapping("/getMaxCode")
	public void getMaxBH(HttpServletResponse response) throws Exception{
		Map<String,Object>  context = new HashMap<String,Object>();
		String value = "GM" + Constant.XZQ_CODE;
		int xh=0;
		String code  = complaintService.getComplaintMaxCode(value);
		if(code != null){
			code=code.substring(value.length(), code.length()-value.length()-1);
			xh = Integer.parseInt(code);
		}		
		xh+=1;
		code=value + StringUtil.fillZero(String.valueOf(xh), 5);

		context.put(SUCCESS, true);
		context.put("antreeCode", code);
		HtmlUtil.writerJson(response, context);
	}	
	
	
}

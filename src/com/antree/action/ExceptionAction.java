package com.antree.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.antree.bean.SysLog;
import com.antree.bean.Patrol;
import com.antree.service.SysLogService;  
import com.antree.utils.HtmlUtil;
import com.antree.model.ExceptionModel;
import com.antree.service.ExceptionService;
import com.antree.utils.Constant;
import com.antree.utils.StringUtil;
 
@Controller
@RequestMapping("/exception") 
public class ExceptionAction extends BaseAction{
	
	private final static Logger log= Logger.getLogger(ExceptionAction.class);

	@Autowired(required=false) 
	private ExceptionService<Exception> exceptionService; 
	
	@Autowired(required=false)
	private SysLogService<SysLog> sysLogService;
	

	@RequestMapping("/list") 
	public ModelAndView  list(ExceptionModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();				
		return forword("antree/antreeInfo",context); 
	}	
	
	@RequestMapping("/dataList") 
	public void  dataList(ExceptionModel model,HttpServletResponse response,HttpServletRequest request) throws Exception{
		List<Exception> dataList = exceptionService.queryByList(model);
		Map<String,Object> jsonMap = new HashMap<String,Object>();
		jsonMap.put("total",model.getPager().getRowCount());
		jsonMap.put("rows", dataList);
		HtmlUtil.writerJson(response, jsonMap);
	}	
	
	@RequestMapping("/save")
	public void save(Exception bean,String pwd,HttpServletResponse response) throws Exception{
		Map<String,Object>  context = new HashMap<String,Object>();
		exceptionService.add(bean);
		sendSuccessMessage(response, "保存成功~");
	}	
	
}

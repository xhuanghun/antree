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

import com.antree.bean.SysLog;
import com.antree.service.SysLogService;  
import com.antree.utils.HtmlUtil;
import com.antree.utils.MethodUtil;
import com.antree.utils.SessionUtils;
import com.antree.bean.BaseBean.DELETED;
import com.antree.bean.BaseBean.STATE;
import com.antree.exception.ServiceException;
import com.antree.model.SysLogModel;
 
@Controller
@RequestMapping("/sysLog") 
public class SysLogAction extends BaseAction{
	
	private final static Logger log= Logger.getLogger(SysLogAction.class);	
	
	@Autowired(required=false) 
	private SysLogService<SysLog> sysLogService;	
	@RequestMapping("/list") 
	public ModelAndView  list(SysLogModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();
		List<SysLog> dataList = sysLogService.queryByList(model);
		context.put("dataList", dataList);
		return forword("sys/sysLog",context); 
	}	
	@RequestMapping("/dataList") 
	public void  dataList(SysLogModel model,HttpServletResponse response) throws Exception{
		List<SysLog> dataList = sysLogService.queryByList(model);
		Map<String,Object> jsonMap = new HashMap<String,Object>();
		jsonMap.put("total",model.getPager().getRowCount());
		jsonMap.put("rows", dataList);
		HtmlUtil.writerJson(response, jsonMap);
	}	
	
}

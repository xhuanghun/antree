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
import com.antree.service.SysLogService;  
import com.antree.utils.HtmlUtil;

import com.antree.bean.AtDictionary;

import com.antree.model.AtDictionaryModel;
import com.antree.service.AtDictionaryService;
 
@Controller
@RequestMapping("/atDictionary") 
public class AtDictionaryAction extends BaseAction{
	
	private final static Logger log= Logger.getLogger(AtDictionaryAction.class);
	
	@Autowired(required=false) 
	private AtDictionaryService<AtDictionary> atDictionaryService; 
	
	@Autowired(required=false)
	private SysLogService<SysLog> sysLogService;
	

	@RequestMapping("/list") 
	public ModelAndView  list(AtDictionaryModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();				
		return forword("antree/atDictionary",context); 
	}
	
	@RequestMapping("/dataList") 
	public void  dataList(AtDictionaryModel model,HttpServletResponse response,HttpServletRequest request) throws Exception{
		List<AtDictionary> dataList = atDictionaryService.queryByList(model);
		
		//设置页面数据
		Map<String,Object> jsonMap = new HashMap<String,Object>();
		jsonMap.put("total",model.getPager().getRowCount());
		jsonMap.put("rows", dataList);
		HtmlUtil.writerJson(response, jsonMap);
	}
	
	@RequestMapping("/save")
	public void save(AtDictionary bean,String pwd,HttpServletResponse response) throws Exception{
		Map<String,Object>  context = new HashMap<String,Object>();
		atDictionaryService.add(bean);
		sendSuccessMessage(response, "保存成功~");
	}	
}

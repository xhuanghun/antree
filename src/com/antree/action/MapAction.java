package com.antree.action;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.servlet.ModelAndView;
 
@Controller
@RequestMapping("/map") 
public class MapAction extends BaseAction{
	
	private final static Logger log= Logger.getLogger(MapAction.class);

	
	@RequestMapping("/view") 
	public ModelAndView  list(HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();				
		return forword("map/map",context); 
	}
	
}

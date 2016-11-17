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

import com.antree.service.PictureInfoService;

import com.antree.service.SysLogService;  
import com.antree.utils.HtmlUtil;
import com.antree.annotation.Auth;
import com.antree.bean.PictureInfo;
import com.antree.model.PictureInfoModel;

import com.antree.utils.Constant;
import com.antree.utils.StringUtil;
import com.antree.utils.ObjectUtil;
 
@Controller
@RequestMapping("/pictureInfo") 
public class PictureInfoAction extends BaseAction{
	
	private final static Logger log= Logger.getLogger(PictureInfoAction.class);

	@Autowired(required=false) 
	private PictureInfoService<PictureInfo> pictureInfoService; 

	@RequestMapping("/list") 
	public ModelAndView  list(PictureInfoModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();				
		return forword("antree/antreePicture",context); 
	}
	
	@RequestMapping("/upload")
	public void  upload(String code,@RequestParam MultipartFile file,HttpServletRequest request,HttpServletResponse response) throws Exception{
		Map<String, Object> result = new HashMap<String, Object>();
		Boolean flag=false;
		if(file.isEmpty()){  
			flag = false;
            
        }else{  
            String filePath="/upload/images/" + code;
            String realPath = request.getSession().getServletContext().getRealPath(filePath);  
            File targetfile = new File(realPath, file.getOriginalFilename());
            FileUtils.copyInputStreamToFile(file.getInputStream(), targetfile);  
            flag=true;
            PictureInfo bean= new PictureInfo();
            bean.setCode(code);
            bean.setZpmc(file.getName());
            bean.setZpxx(ObjectUtil.objectToBytes(targetfile));
            bean.setLx(file.getContentType());
            bean.setDx(file.getSize());
            bean.setTplj(filePath + file.getOriginalFilename());
            pictureInfoService.add(bean);
        }  
		result.put(SUCCESS, flag);
		HtmlUtil.writerJson(response, result);
	}
	

	
	@RequestMapping("/dataList") 
	public void  dataList(PictureInfoModel model,HttpServletResponse response,HttpServletRequest request) throws Exception{
		List<PictureInfo> dataList = pictureInfoService.queryByList(model);
		Map<String,Object> jsonMap = new HashMap<String,Object>();
		jsonMap.put("total",model.getPager().getRowCount());
		jsonMap.put("rows", dataList);
		HtmlUtil.writerJson(response, jsonMap);
	}	
	
	
	@RequestMapping("/save")
	public void save(PictureInfo bean,String pwd,HttpServletResponse response) throws Exception{
		Map<String,Object>  context = new HashMap<String,Object>();
		pictureInfoService.add(bean);
		sendSuccessMessage(response, "保存成功~");
	}
		
	
	
}

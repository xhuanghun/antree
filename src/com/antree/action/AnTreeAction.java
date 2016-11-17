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

import com.antree.annotation.Auth;
import com.antree.bean.PictureInfo;
import com.antree.bean.SysLog;
import com.antree.service.SysLogService;  
import com.antree.utils.HtmlUtil;
import com.antree.bean.AnTree;
import com.antree.model.AnTreeModel;
import com.antree.service.AnTreeService;
import com.antree.service.PictureInfoService;
import com.antree.utils.Constant;
import com.antree.utils.ObjectUtil;
import com.antree.utils.StringUtil;
 
@Controller
@RequestMapping("/anTree") 
public class AnTreeAction extends BaseAction{
	
	private final static Logger log= Logger.getLogger(AnTreeAction.class);

	@Autowired(required=false) 
	private AnTreeService<AnTree> anTreeService; 
	
	@Autowired(required=false)
	private SysLogService<SysLog> sysLogService;
	
	@Autowired(required=false)
	private PictureInfoService<PictureInfo> pictureInfoService;
	

	@RequestMapping("/list") 
	public ModelAndView  list(AnTreeModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();				
		return forword("antree/antreeInfo",context); 
	}
	
	@RequestMapping("/query") 
	public ModelAndView  query(AnTreeModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();				
		return forword("antree/antreeQuery",context); 
	}
	
	@RequestMapping("/image") 
	public ModelAndView  image(AnTreeModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();				
		return forword("antree/antreePicture",context); 
	}
	
	@RequestMapping("/create") 
	public ModelAndView  create(AnTreeModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();		
		List<AnTree> dataList = anTreeService.queryByList(model);
		context.put("dataList", dataList);
		return forword("antree/antreeAdd",context); 
	}
	

	@RequestMapping(value="/upload")
	public void  upload_image(String codeKey,@RequestParam("uploadfile") MultipartFile file,HttpServletRequest request,HttpServletResponse response) throws Exception{
		Map<String, Object> result = new HashMap<String, Object>();
		Boolean flag=false;
		if(file.isEmpty()){  
			flag = false;
              
        }else{  
            String filePath="/upload/images/" + codeKey;
            String realPath = request.getSession().getServletContext().getRealPath(filePath); 
            String fileName = file.getOriginalFilename();
            File tempfile = new File(realPath + "/" +fileName);
            if(tempfile.exists()){
            	String extName=fileName.substring(fileName.lastIndexOf(".")+1);
            	String firstName=fileName.substring(0,fileName.lastIndexOf("."));
            	fileName = firstName + "_1." + extName;
            }
            File targetfile = new File(realPath, fileName);
            FileUtils.copyInputStreamToFile(file.getInputStream(), targetfile);  
            flag=true;
            PictureInfo bean= new PictureInfo();
            bean.setCode(codeKey);
            bean.setZpmc(fileName);
            bean.setZpxx(ObjectUtil.objectToBytes(targetfile));
            bean.setLx(file.getContentType());
            bean.setDx(file.getSize());
            bean.setTplj(filePath +"/" + fileName);
            pictureInfoService.add(bean);
        }  
		result.put(SUCCESS, flag);
		HtmlUtil.writerJson(response, result);
	}
	
	
	@RequestMapping("/dataList") 
	public void  dataList(AnTreeModel model,HttpServletResponse response,HttpServletRequest request) throws Exception{
		List<AnTree> dataList = anTreeService.queryByList(model);
		//设置页面数据
		Map<String,Object> jsonMap = new HashMap<String,Object>();
		jsonMap.put("total",model.getPager().getRowCount());
		jsonMap.put("rows", dataList);
		HtmlUtil.writerJson(response, jsonMap);
	}	
	
	@RequestMapping("/save")
	public void save(AnTree bean,String pwd,HttpServletResponse response) throws Exception{
		Map<String,Object>  context = new HashMap<String,Object>();
		anTreeService.add(bean);
		sendSuccessMessage(response, "保存成功~");
	}
	
	
	
	@RequestMapping("/getMaxCode")
	public void getMaxBH(HttpServletResponse response) throws Exception{
		Map<String,Object>  context = new HashMap<String,Object>();
		String value = "GM" + Constant.XZQ_CODE;
		int xh=0;
		String code  = anTreeService.getAnTreeMaxCode(value);
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

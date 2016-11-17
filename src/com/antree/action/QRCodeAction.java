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

import sun.misc.BASE64Decoder;//将base64转换为byte[]

import sun.misc.BASE64Encoder;//转byet[]换为base64 

import com.antree.service.AnTreeService;
import com.antree.service.SysLogService;  
import com.antree.utils.HtmlUtil;
import com.antree.bean.AnTree;
import com.antree.bean.QRCode;
import com.antree.model.QRCodeModel;
import com.antree.service.QRCodeService;
import com.antree.utils.Constant;
import com.antree.utils.StringUtil;
 
@Controller
@RequestMapping("/qrCode") 
public class QRCodeAction extends BaseAction{
	
	private final static Logger log= Logger.getLogger(QRCodeAction.class);

	@Autowired(required=false) 
	private QRCodeService<QRCode> qRCodeService; 

	@RequestMapping("/list") 
	public ModelAndView  list(QRCodeModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();				
		return forword("qrcode/qrcodeInfo",context); 
	}
	
		
	@RequestMapping("/create") 
	public ModelAndView  create(QRCodeModel model,HttpServletRequest request) throws Exception{
		Map<String,Object>  context = getRootMap();	
		return forword("qrcode/qrcodeAdd",context); 
	}
	
	
	@RequestMapping("/dataList") 
	public void  dataList(QRCodeModel model,HttpServletResponse response,HttpServletRequest request) throws Exception{
		List<QRCode> dataList = qRCodeService.queryByList(model);
		Map<String,Object> jsonMap = new HashMap<String,Object>();
		jsonMap.put("total",model.getPager().getRowCount());
		jsonMap.put("rows", dataList);
		HtmlUtil.writerJson(response, jsonMap);
	}	
	
	
	@RequestMapping("/save")
	public void save(String code,String qrcodetxt,String content,HttpServletResponse response) throws Exception{
		//Map<String,Object>  context = new HashMap<String,Object>();
		BASE64Decoder decode = new BASE64Decoder(); 
		byte[] bt = decode.decodeBuffer(content);
		QRCode bean = new QRCode();
		bean.setCode(code);
		bean.setLjdz(qrcodetxt);
		bean.setEwmtp(bt);
		
		qRCodeService.add(bean);
		sendSuccessMessage(response, "保存成功~");
	}
	
	
}

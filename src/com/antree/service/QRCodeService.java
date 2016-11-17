package com.antree.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.antree.bean.QRCode;
import com.antree.mapper.QRCodeMapper;
import com.antree.model.PictureInfoModel;
import com.antree.model.QRCodeModel;;

/**
 * 
 * <br>
 * <b>功能：</b>QRCodeService<br>
 * <b>作者：</b>黄贵群<br>
 * <b>日期：</b> <br>
 * <b>版权所有：<b>版权所有(C) <br>
 */
@Service("qRCodeService")
public class QRCodeService<T> extends BaseService<T> {
	private final static Logger log= Logger.getLogger(QRCodeService.class);
	
	public T queryByCode(String code){
		QRCodeModel model= new QRCodeModel();
		model.setCode(code);
		return getMapper().queryByCode(model);
	}
		
	@Autowired
    private QRCodeMapper<T> mapper;

		
	public QRCodeMapper<T> getMapper() {
		return mapper;
	}

}

package com.antree.service;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.List;

import com.antree.mapper.PictureInfoMapper;
import com.antree.model.PictureInfoModel;
import com.antree.utils.ObjectUtil;

/**
 * 
 * <br>
 * <b>功能：</b>PictureInfoService<br>
 * <b>作者：</b>黄贵群<br>
 * <b>日期：</b> <br>
 * <b>版权所有：<b><br>
 */
@Service("pictureInfoService")
public class PictureInfoService<T> extends BaseService<T> {
	private final static Logger log= Logger.getLogger(PictureInfoService.class);
	
	public List<T> queryByCode(String code){
		PictureInfoModel model= new PictureInfoModel();
		model.setCode(code);
		return getMapper().queryByCode(model);
	}
	
	public byte[] queryBlobById(long id){
		Object obj=getMapper().queryBlobById(id);
		byte[] bt=null;//ObjectUtil.objectToBytes(obj);
        return bt;
	}
	
	@Autowired
    private PictureInfoMapper<T> mapper;

		
	public PictureInfoMapper<T> getMapper() {
		return mapper;
	}

}

package com.antree.service;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.antree.mapper.ExceptionMapper;
import com.antree.model.AnTreeModel;
import com.antree.model.ExceptionModel;


/**
 * 
 * <br>
 * <b>功能：</b>ExceptionService<br>
 * <b>作者：</b>黄贵群<br>
 * <b>日期：</b>  <br>
 * <b>版权所有：
 */
@Service("exceptionService")
public class ExceptionService<T> extends BaseService<T> {
	private final static Logger log= Logger.getLogger(ExceptionService.class);
			
	public T queryByCode(String code){
		ExceptionModel model= new ExceptionModel();;
		model.setCode(code);
		return getMapper().queryByCode(model);
	}
	
	@Autowired
    private ExceptionMapper<T> mapper;

		
	public ExceptionMapper<T> getMapper() {
		return mapper;
	}

}

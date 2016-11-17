package com.antree.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.antree.mapper.DiagnoseMapper;


/**
 * 
 * <br>
 * <b>功能：</b>DiagnoseService<br>
 * <b>作者：</b>黄贵群<br>
 * <b>日期：</b>  <br>
 * <b>版权所有：
 */
@Service("diagnoseService")
public class DiagnoseService<T> extends BaseService<T> {
	private final static Logger log= Logger.getLogger(DiagnoseService.class);
		
	
	@Autowired
    private DiagnoseMapper<T> mapper;

		
	public DiagnoseMapper<T> getMapper() {
		return mapper;
	}

}

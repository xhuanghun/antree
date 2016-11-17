package com.antree.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.antree.mapper.PatrolMapper;
import com.antree.model.PatrolModel;


/**
 * 
 * <br>
 * <b>功能：</b>PatrolService<br>
 * <b>作者：</b>黄贵群<br>
 * <b>日期：</b>  <br>
 * <b>版权所有：
 */
@Service("patrolService")
public class PatrolService<T> extends BaseService<T> {
	private final static Logger log= Logger.getLogger(PatrolService.class);
	
	public T queryByCode(String code){
		PatrolModel model= new PatrolModel();;
		model.setCode(code);
		return getMapper().queryByCode(model);
	}
	
	public List<T> queryByAllList(){
		return getMapper().queryByAllList();
	}
	
	@Autowired
    private PatrolMapper<T> mapper;

		
	public PatrolMapper<T> getMapper() {
		return mapper;
	}

}

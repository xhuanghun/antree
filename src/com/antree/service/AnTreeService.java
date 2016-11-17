package com.antree.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.antree.bean.AnTree;
import com.antree.mapper.AnTreeMapper;
import com.antree.model.AnTreeModel;;

/**
 * 
 * <br>
 * <b>功能：</b>AnTreeService<br>
 * <b>作者：</b>黄贵群<br>
 * <b>日期：</b> <br>
 * <b>版权所有：<b><br>
 */
@Service("anTreeService")
public class AnTreeService<T> extends BaseService<T> {
	private final static Logger log= Logger.getLogger(AnTreeService.class);
	
	/**
	 * 获取最大编号
	 * @param 
	 * @return
	 */
	public String getAnTreeMaxCode(String value){
		AnTreeModel model= new AnTreeModel();
		model.setCode(value);
		return getMapper().getAnTreeMaxCode(value);
	}
	
	public List<T> getAnTreeByWhere(String value){
		return getMapper().getAnTreeByWhere(value);
	}
	
	public T getAnTreeByCode(String code){
		AnTreeModel model= new AnTreeModel();
		model.setCode(code);
		return getMapper().getAnTreeByCode(model);
	}
	
	public List<T> queryByAllList(){
		return getMapper().queryByAllList();
	}
	
	
	@Autowired
    private AnTreeMapper<T> mapper;

		
	public AnTreeMapper<T> getMapper() {
		return mapper;
	}

}

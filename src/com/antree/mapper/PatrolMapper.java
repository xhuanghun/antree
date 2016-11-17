package com.antree.mapper;

import java.util.List;

import com.antree.model.ExceptionModel;
import com.antree.model.PatrolModel;

public interface PatrolMapper<T> extends BaseMapper<T> {
	
	public T queryByCode(PatrolModel model); 
	
	public List<T> queryByAllList(); 
}

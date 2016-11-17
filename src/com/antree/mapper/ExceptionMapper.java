package com.antree.mapper;

import com.antree.model.AnTreeModel;
import com.antree.model.ExceptionModel;

public interface ExceptionMapper<T> extends BaseMapper<T> {
	
	public T queryByCode(ExceptionModel model); 
}

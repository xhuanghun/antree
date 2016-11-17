package com.antree.mapper;

import com.antree.model.AnTreeModel;
import java.util.List;
public interface AnTreeMapper<T> extends BaseMapper<T> {
	
	public T querybyId(AnTreeModel model);
	
	public List<T> getAnTreeByWhere(String value);
	
	public T getAnTreeByCode(AnTreeModel model);	

	public int getAnTreeCount();
	
	public List<T> queryByAllList(); 
	
	public String getAnTreeMaxCode(String value);
}

package com.antree.mapper;

import java.util.List;

import com.antree.model.ComplaintModel;
public interface ComplaintMapper<T> extends BaseMapper<T> {
	
	public T querybyId(ComplaintModel model);
	
	public List<T> getComplaintByWhere(String value);
	
	public T getComplaintByCode(ComplaintModel model);	

	public int getComplaintCount();
	
	public List<T> queryByAllList(); 
	
	public String getComplaintMaxCode(String value);
}

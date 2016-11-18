package com.antree.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.antree.bean.SysRoleRel.RelType;
import com.antree.mapper.ComplaintMapper;
import com.antree.model.ComplaintModel;

/**
 * 
 * <br>
 * <b>功能：</b>AnTreeService<br>
 * <b>作者：</b>黄贵群<br>
 * <b>日期：</b> <br>
 * <b>版权所有：<b><br>
 */
@Service("complaintService")
public class ComplaintService<T> extends BaseService<T> {
	private final static Logger log= Logger.getLogger(ComplaintService.class);
	
	/**
	 * 获取最大编号
	 * @param 
	 * @return
	 */
	public String getComplaintMaxCode(String value){
		ComplaintModel model= new ComplaintModel();
		model.setCode(value);
		return getMapper().getComplaintMaxCode(value);
	}
	
	public List<T> getComplaintByWhere(String value){
		return getMapper().getComplaintByWhere(value);
	}
	
	@Override
	public void delete(Object[] ids) throws Exception {
		super.delete(ids);
		//删除关联关系
	}
	public T getComplaintByCode(String code){
		ComplaintModel model= new ComplaintModel();
		model.setCode(code);
		return getMapper().getComplaintByCode(model);
	}
	
	public List<T> queryByAllList(){
		return getMapper().queryByAllList();
	}
	
	
	@Autowired
    private ComplaintMapper<T> mapper;

		
	public ComplaintMapper<T> getMapper() {
		return mapper;
	}

}

package com.antree.model;
import org.apache.commons.lang.StringUtils;

import com.antree.utils.Pager;
import com.antree.utils.Constant;
import com.antree.utils.StringUtil;

public class BaseModel {

	private Integer page = 1;
	
	private Integer rows =10;
	
	private String sort;
	
	private String order;

	
	/**
	 * 分页导航
	 */
	private Pager pager = new Pager();
	
	private Constant constant=new Constant();
	
	public Pager getPager() {
		pager.setPageId(getPage());
		pager.setPageSize(getRows());
		String orderField="";
		if(StringUtils.isNotBlank(sort)){
			orderField = sort;
		}
		if(StringUtils.isNotBlank(orderField) && StringUtils.isNotBlank(order)){
			orderField +=" "+ order;
		}
		pager.setOrderField(orderField);
		return pager;
	}

	public void setPager(Pager pager) {
		this.pager = pager;
	}

	public Integer getPage() {
		return page;
	}

	public void setPage(Integer page) {
		this.page = page;
	}

	public Integer getRows() {
		return rows;
	}

	public void setRows(Integer rows) {
		this.rows = rows;
	}

	public String getSort() {
		return sort;
	}

	public void setSort(String sort) {
		this.sort = sort;
	}

	public String getOrder() {
		return order;
	}

	public void setOrder(String order) {
		this.order = order;
	}

	
/*	public void setConstant(Constant constant) {
		this.constant = constant;
	}
	
	public Constant getConstant() {
		return constant;
	}*/
	
}

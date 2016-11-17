package com.antree.mapper;

import java.util.List;

public interface SysRoleMapper<T> extends BaseMapper<T> {
	
	public List<T> queryAllList();
	
	
	public List<T> queryByUserid(Integer userid);
}

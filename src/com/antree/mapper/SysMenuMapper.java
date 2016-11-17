package com.antree.mapper;

import java.util.List;

public interface SysMenuMapper<T> extends BaseMapper<T> {
	
	public List<T> queryByAll();
	
	
	public List<T> getRootMenu(java.util.Map map);
	
	public List<T> getChildMenu();
	
	

	public List<T> getMenuByRoleId(Integer roleId);
	
	
	public List<T> getRootMenuByUser(Integer userId);
	
	public List<T> getChildMenuByUser(Integer userId);
	
}

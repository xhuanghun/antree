package com.antree.mapper;

import com.antree.model.SysUserModel;

public interface SysUserMapper<T> extends BaseMapper<T> {
	
	public T queryLogin(SysUserModel model);
	
	public T queryBySSOLogin(SysUserModel model);
	
	
	public int getUserCountByLogin(String login);
}

package com.antree.model;

public class SysUserModel extends BaseModel {
	

	
	private String login;   //登录帐号
	private Integer superAdmin;//超级管理员
	
	public String getLogin() {
	    return this.login;
	}
	public void setLogin(String login) {
	    this.login=login;
	}
	public Integer getSuperAdmin() {
		return superAdmin;
	}
	public void setSuperAdmin(Integer superAdmin) {
		this.superAdmin = superAdmin;
	}
	
}
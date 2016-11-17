package com.antree.model;

public class SysLogModel extends BaseModel {

	private Integer id;  //主键id
	private String login;//账户
	private String name;//名称
	private String ipAddrs;//ip地址
	private String model;
	private String content;//操作内容
	private java.sql.Timestamp createTime;//   创建时间
	private Integer count;
	private Integer ptype;
	private String descr;//描述
	
	
	public Integer getId() {
	    return this.id;
	}
	public void setId(Integer id) {
	    this.id=id;
	}
	public String getLogin() {
	    return this.login;
	}
	public void setLogin(String login) {
	    this.login=login;
	}
	public String getName() {
	    return this.name;
	}
	public void setName(String name) {
	    this.name=name;
	}	
	
	public String getIpAddrs() {
		return ipAddrs;
	}
	public void setIpAddrs(String ipAddrs) {
		this.ipAddrs = ipAddrs;
	}
	public String getContent() {
	    return this.content;
	}
	public void setContent(String content) {
	    this.content=content;
	}	
	
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	public Integer getPtype() {
		return ptype;
	}
	public void setPtype(Integer ptype) {
		this.ptype = ptype;
	}
	public java.sql.Timestamp getCreateTime() {
	    return this.createTime;
	}
	public void setCreateTime(java.sql.Timestamp createTime) {
	    this.createTime=createTime;
	}
	public String getDescr() {
	    return this.descr;
	}
	public void setDescr(String descr) {
	    this.descr=descr;
	}	
}

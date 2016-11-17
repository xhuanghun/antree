package com.antree.bean;
public class Diagnose extends BaseBean {
	private Integer id;//   id主键
	private String code;  //古树名木编号
	private String hzyj;//  古树异常情况	
	private String zjm;  //预警来源
	private String hzry;  //预警人员
	private java.sql.Timestamp hzsj;//  预警时间
	private Integer state;//   状态 0=可用,1=禁用	
	private java.sql.Timestamp createTime;//   创建时间
	private String bz;  //备注
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getHzyj() {
		return hzyj;
	}
	public void setHzyj(String hzyj) {
		this.hzyj = hzyj;
	}
	public String getZjm() {
		return zjm;
	}
	public void setZjm(String zjm) {
		this.zjm = zjm;
	}
	public String getHzry() {
		return hzry;
	}
	public void setHzry(String hzry) {
		this.hzry = hzry;
	}
	public java.sql.Timestamp getHzsj() {
		return hzsj;
	}
	public void setHzsj(java.sql.Timestamp hzsj) {
		this.hzsj = hzsj;
	}
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}
	public java.sql.Timestamp getCreateTime() {
		return createTime;
	}
	public void setCreateTime(java.sql.Timestamp createTime) {
		this.createTime = createTime;
	}
	public String getBz() {
		return bz;
	}
	public void setBz(String bz) {
		this.bz = bz;
	}
}

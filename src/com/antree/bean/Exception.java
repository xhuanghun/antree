package com.antree.bean;
public class Exception extends BaseBean {
	private Integer id;//   id主键
	private String code;  //古树名木编号
	private String gsycqk;//  古树异常情况
	private java.sql.Timestamp yjsj;//  预警时间
	private String yjly;  //预警来源
	private String yjry;  //预警人员
	private String yjjb;  //预警级别
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
	public String getGsycqk() {
		return gsycqk;
	}
	public void setGsycqk(String gsycqk) {
		this.gsycqk = gsycqk;
	}
	public java.sql.Timestamp getYjsj() {
		return yjsj;
	}
	public void setYjsj(java.sql.Timestamp yjsj) {
		this.yjsj = yjsj;
	}
	public String getYjly() {
		return yjly;
	}
	public void setYjly(String yjly) {
		this.yjly = yjly;
	}
	public String getYjry() {
		return yjry;
	}
	public void setYjry(String yjry) {
		this.yjry = yjry;
	}
	public String getYjjb() {
		return yjjb;
	}
	public void setYjjb(String yjjb) {
		this.yjjb = yjjb;
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

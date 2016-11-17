package com.antree.model;

public class PatrolModel extends BaseModel {
	private Integer id;//   id主键
	private String code;  //古树名木编号
	private java.sql.Timestamp xcsj;//巡查时间
	private String xcqk;//  巡查情况
	private byte[] xctp;
	private String xctpStr;
	public String getXctpStr() {
		return xctpStr;
	}
	public void setXctpStr(String xctpStr) {
		this.xctpStr = xctpStr;
	}
	public byte[] getXctp() {
		return xctp;
	}
	public void setXctp(byte[] xctp) {
		this.xctp = xctp;
	}
	private String xcry;//  巡查人员
	private String xccs;  //巡查次数
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
	public java.sql.Timestamp getXcsj() {
		return xcsj;
	}
	public void setXcsj(java.sql.Timestamp xcsj) {
		this.xcsj = xcsj;
	}
	public String getXcqk() {
		return xcqk;
	}
	public void setXcqk(String xcqk) {
		this.xcqk = xcqk;
	}
	public String getXcry() {
		return xcry;
	}
	public void setXcry(String xcry) {
		this.xcry = xcry;
	}
	public String getXccs() {
		return xccs;
	}
	public void setXccs(String xccs) {
		this.xccs = xccs;
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

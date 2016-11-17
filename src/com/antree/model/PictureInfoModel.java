package com.antree.model;

public class PictureInfoModel extends BaseModel {
	private Integer id;//   id主键
	private String code;  //古树名木编号
	private String zpmc;//二进制文件
	private String zpms;//   树种
	private byte[] zpxx;//   中文学名
	private String zpxxStr;
	public String getZpxxStr() {
		return zpxxStr;
	}
	public void setZpxxStr(String zpxxStr) {
		this.zpxxStr = zpxxStr;
	}
	private String lx;  //别名	
	private Integer dx;
	private String scry;	
	private String tplj;
	private Integer state;//   状态 0=可用,1=禁用	
	private java.sql.Timestamp scsj;
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
	public String getZpmc() {
		return zpmc;
	}
	public void setZpmc(String zpmc) {
		this.zpmc = zpmc;
	}
	public String getZpms() {
		return zpms;
	}
	public void setZpms(String zpms) {
		this.zpms = zpms;
	}
	public byte[] getZpxx() {
		return zpxx;
	}
	public void setZpxx(byte[] zpxx) {
		this.zpxx = zpxx;
	}
	public String getLx() {
		return lx;
	}
	public void setLx(String lx) {
		this.lx = lx;
	}
	public Integer getDx() {
		return dx;
	}
	public void setDx(Integer dx) {
		this.dx = dx;
	}
	public String getScry() {
		return scry;
	}
	public void setScry(String scry) {
		this.scry = scry;
	}
	
	public String getTplj() {
		return tplj;
	}
	public void setTplj(String tplj) {
		this.tplj = tplj;
	}
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}
	public java.sql.Timestamp getScsj() {
		return scsj;
	}
	public void setScsj(java.sql.Timestamp scsj) {
		this.scsj = scsj;
	}
	public String getBz() {
		return bz;
	}
	public void setBz(String bz) {
		this.bz = bz;
	}		
}

package com.antree.bean;
public class QRCode extends BaseBean {
	
	private Integer id;//   id主键
	private String code;  //古树名木编号
	private byte[] ewmtp;//二进制文件
	public byte[] getEwmtp() {
		return ewmtp;
	}
	public void setEwmtp(byte[] ewmtp) {
		this.ewmtp = ewmtp;
	}
	private String ewmtpStr;
	private String ljdz;//   树种
	private String ljcs;//   中文学名
	private String tplj;  //别名	
	private Integer state;//   状态 0=可用,1=禁用	
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
	
	public String getEwmtpStr() {
		return ewmtpStr;
	}
	public void setEwmtpStr(String ewmtpStr) {
		this.ewmtpStr = ewmtpStr;
	}
	public String getLjdz() {
		return ljdz;
	}
	public void setLjdz(String ljdz) {
		this.ljdz = ljdz;
	}
	public String getLjcs() {
		return ljcs;
	}
	public void setLjcs(String ljcs) {
		this.ljcs = ljcs;
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
	public String getBz() {
		return bz;
	}
	public void setBz(String bz) {
		this.bz = bz;
	}
	
		
}

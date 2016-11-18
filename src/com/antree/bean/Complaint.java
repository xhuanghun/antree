package com.antree.bean;
public class Complaint extends BaseBean {
	private Integer id;//   id主键
	private String code;  //意见编号
	private String title;//   建议标题
	private String content;//   建议内容
	private String flie;//   意见图片url
	private String name;  //上传者名字
	private String clzt;  //处理状态
	private String nr;  //内容
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
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getFlie() {
		return flie;
	}
	public void setFlie(String flie) {
		this.flie = flie;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getClzt() {
		return clzt;
	}
	public void setClzt(String clzt) {
		this.clzt = clzt;
	}
	public String getNr() {
		return nr;
	}
	public void setNr(String nr) {
		this.nr = nr;
	}
}

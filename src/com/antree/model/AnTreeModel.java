package com.antree.model;

public class AnTreeModel extends BaseModel {
	private Integer id;//   id主键
	private String code;  //古树名木编号
	private String dcbh;//   调查编号
	private String sz;//   树种
	private String zwxm;//   中文学名
	private String bm;  //别名
	private String ldm;  //拉丁名
	private String ks;  //科属
	private String qs;  //权属
	private String ssqy;	
	public String getSsqy() {
		return ssqy;
	}
	public void setSsqy(String ssqy) {
		this.ssqy = ssqy;
	}
	private String gldw;  //管理单位
	private String glry;  //管理人员
	private String glrydh;  //管理人员电话
	private String glrydz;  //管理人员地址
	private String sfgp;  //是否挂牌
	private String sl;  //树龄
	private String slly;  //树龄来源
	private String bhjb;  //保护级别
	private String jb;  //级别
	private float sg;  //树高
	private float xw;  //胸围
	private float dw;  //地围
	private String gfdxx;  //冠幅东西向
	private String gfnbx;  //冠幅南北向
	private float hb;  //海拔
	private float px;  //坡向
	private float pw;  //坡位
	private double jz;  //价值
	private String ldtj;  //立地条件
	private String trzl;  //土壤质量
	private String trys;  //土壤颜色
	private String trxz;  //土壤性质
	private String trjsd;  //土壤紧实度
	private String szhj;  //生长环境
	private String szs;  //生长势
	private String fb;  //发布
	private String smtszkms;  //树木特殊状况描述
	private String bhzkjjy;  //保护状况及建议
	private String gscsls;  //古树传说及历史来历
	private String zpbh;  //照片编号	
	private Double jd; //经度
	private Double wd; //纬度
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
	public String getDcbh() {
		return dcbh;
	}
	public void setDcbh(String dcbh) {
		this.dcbh = dcbh;
	}
	public String getSz() {
		return sz;
	}
	public void setSz(String sz) {
		this.sz = sz;
	}
	public String getZwxm() {
		return zwxm;
	}
	public void setZwxm(String zwxm) {
		this.zwxm = zwxm;
	}
	public String getBm() {
		return bm;
	}
	public void setBm(String bm) {
		this.bm = bm;
	}
	public String getLdm() {
		return ldm;
	}
	public void setLdm(String ldm) {
		this.ldm = ldm;
	}
	public String getKs() {
		return ks;
	}
	public void setKs(String ks) {
		this.ks = ks;
	}
	public String getQs() {
		return qs;
	}
	public void setQs(String qs) {
		this.qs = qs;
	}
	public String getGldw() {
		return gldw;
	}
	public void setGldw(String gldw) {
		this.gldw = gldw;
	}
	public String getGlry() {
		return glry;
	}
	public void setGlry(String glry) {
		this.glry = glry;
	}
	public String getGlrydh() {
		return glrydh;
	}
	public void setGlrydh(String glrydh) {
		this.glrydh = glrydh;
	}
	public String getGlrydz() {
		return glrydz;
	}
	public void setGlrydz(String glrydz) {
		this.glrydz = glrydz;
	}
	public String getSfgp() {
		return sfgp;
	}
	public void setSfgp(String sfgp) {
		this.sfgp = sfgp;
	}
	public String getSl() {
		return sl;
	}
	public void setSl(String sl) {
		this.sl = sl;
	}
	public String getSlly() {
		return slly;
	}
	public void setSlly(String slly) {
		this.slly = slly;
	}
	public String getBhjb() {
		return bhjb;
	}
	public void setBhjb(String bhjb) {
		this.bhjb = bhjb;
	}
	public String getJb() {
		return jb;
	}
	public void setJb(String jb) {
		this.jb = jb;
	}
	public float getSg() {
		return sg;
	}
	public void setSg(float sg) {
		this.sg = sg;
	}
	public float getXw() {
		return xw;
	}
	public void setXw(float xw) {
		this.xw = xw;
	}
	public float getDw() {
		return dw;
	}
	public void setDw(float dw) {
		this.dw = dw;
	}
	public String getGfdxx() {
		return gfdxx;
	}
	public void setGfdxx(String gfdxx) {
		this.gfdxx = gfdxx;
	}
	public String getGfnbx() {
		return gfnbx;
	}
	public void setGfnbx(String gfnbx) {
		this.gfnbx = gfnbx;
	}
	public float getHb() {
		return hb;
	}
	public void setHb(float hb) {
		this.hb = hb;
	}
	public float getPx() {
		return px;
	}
	public void setPx(float px) {
		this.px = px;
	}
	public float getPw() {
		return pw;
	}
	public void setPw(float pw) {
		this.pw = pw;
	}
	public double getJz() {
		return jz;
	}
	public void setJz(double jz) {
		this.jz = jz;
	}
	public String getLdtj() {
		return ldtj;
	}
	public void setLdtj(String ldtj) {
		this.ldtj = ldtj;
	}
	public String getTrzl() {
		return trzl;
	}
	public void setTrzl(String trzl) {
		this.trzl = trzl;
	}
	public String getTrys() {
		return trys;
	}
	public void setTrys(String trys) {
		this.trys = trys;
	}
	public String getTrxz() {
		return trxz;
	}
	public void setTrxz(String trxz) {
		this.trxz = trxz;
	}
	public String getTrjsd() {
		return trjsd;
	}
	public void setTrjsd(String trjsd) {
		this.trjsd = trjsd;
	}
	public String getSzhj() {
		return szhj;
	}
	public void setSzhj(String szhj) {
		this.szhj = szhj;
	}
	public String getSzs() {
		return szs;
	}
	public void setSzs(String szs) {
		this.szs = szs;
	}
	public String getFb() {
		return fb;
	}
	public void setFb(String fb) {
		this.fb = fb;
	}
	public String getSmtszkms() {
		return smtszkms;
	}
	public void setSmtszkms(String smtszkms) {
		this.smtszkms = smtszkms;
	}
	public String getBhzkjjy() {
		return bhzkjjy;
	}
	public void setBhzkjjy(String bhzkjjy) {
		this.bhzkjjy = bhzkjjy;
	}
	public String getGscsls() {
		return gscsls;
	}
	public void setGscsls(String gscsls) {
		this.gscsls = gscsls;
	}
	public String getZpbh() {
		return zpbh;
	}
	public void setZpbh(String zpbh) {
		this.zpbh = zpbh;
	}
	
	public Double getJd() {
		return jd;
	}
	public void setJd(Double jd) {
		this.jd = jd;
	}
	public Double getWd() {
		return wd;
	}
	public void setWd(Double wd) {
		this.wd = wd;
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

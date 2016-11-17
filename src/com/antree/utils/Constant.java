package com.antree.utils;

import java.util.ResourceBundle;

import org.apache.commons.lang.math.NumberUtils;

public class Constant {

	private static ResourceBundle res = ResourceBundle.getBundle("sysconfig");
	public static String SSI_WEBSITE_NAME = res.getString("ssi.website.name");
	public static String SSI_WEBSITE_DOMAIN = res.getString("ssi.website.domain");
	public static String SSI_WEBSITE_URL = res.getString("ssi.website.url");
	
	
	public static String WORK_ROOT_PATH  = res.getString("work.root.path");
	public static String WORK_TEMPLATE_PATH  = res.getString("work.template.path");
	public static String UPLOAD_URL = res.getString("upload.url");
	public static String SEARCH_URL =  res.getString("search.url");
	
	public static String LOOK_URL =  res.getString("look.url");
	public static String SEARCH_SCORE =  res.getString("search.score");
	
	public static String UPLOAD_PATH = res.getString("upload.path");
	
	public static String UPLOAD_PIC_SIZE = res.getString("upload.pic.size");
	public static String INDEX_BASE_DIR =res.getString("index.base.dir");
	
	public String ROADLAYERNAME="road_gs";
	
	public static String XZQ_CODE = "460000";

	public static enum SuperAdmin {
		NO(0, "否"), YES(1,"是");
		public int key;
		public String value;
		private SuperAdmin(int key, String value) {
			this.key = key;
			this.value = value;
		}
		public static SuperAdmin get(int key) {
			SuperAdmin[] values = SuperAdmin.values();
			for (SuperAdmin object : values) {
				if (object.key == key) {
					return object;
				}
			}
			return null;
		}		
	}

	public String getRoadlayerName(){
		if(this.ROADLAYERNAME == "")
		{
			return "road_gs";
		}
		return this.ROADLAYERNAME;
	}
	
	public void setRoadLayerName(String ROADLAYERNAME){
		this.ROADLAYERNAME=ROADLAYERNAME;
	}
}
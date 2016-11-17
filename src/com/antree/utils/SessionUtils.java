package com.antree.utils;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;

import com.antree.bean.SysUser;
import com.antree.utils.Constant.SuperAdmin;

public final class SessionUtils {
	
	protected static final Logger logger = Logger.getLogger(SessionUtils.class);
	
	private static final String SESSION_USER = "session_user";

	private static final String SESSION_VALIDATECODE = "session_validatecode";
	
	
	private static final String SESSION_ACCESS_URLS = "session_access_urls"; 
	
	
	private static final String SESSION_MENUBTN_MAP = "session_menubtn_map"; 

	
	public static void setAttr(HttpServletRequest request,String key,Object value){
		 request.getSession(true).setAttribute(key, value);
	 }
	 
	 
	 public static Object getAttr(HttpServletRequest request,String key){
		 return request.getSession(true).getAttribute(key);
	 }
	 
	 public static void removeAttr(HttpServletRequest request,String key){
		 request.getSession(true).removeAttribute(key);
	 }
	 public static void setUser(HttpServletRequest request,SysUser user){
		 request.getSession(true).setAttribute(SESSION_USER, user);
	 }
	 
	 public static SysUser getUser(HttpServletRequest request){
		return (SysUser)request.getSession(true).getAttribute(SESSION_USER);
	 }
	 
	 public static void removeUser(HttpServletRequest request){
		removeAttr(request, SESSION_USER);
	 }
	 
	 public static void setValidateCode(HttpServletRequest request,String validateCode){
		 request.getSession(true).setAttribute(SESSION_VALIDATECODE, validateCode);
	 }
	 
	 
	 public static String getValidateCode(HttpServletRequest request){
		return (String)request.getSession(true).getAttribute(SESSION_VALIDATECODE);
	 }
	 public static void removeValidateCode(HttpServletRequest request){
		removeAttr(request, SESSION_VALIDATECODE);
	 }
	 
	 public static boolean isAdmin(HttpServletRequest request){ 
		 SysUser user =  getUser(request);
		 if(user == null  || user.getSuperAdmin() != SuperAdmin.YES.key){
			 return false;
		 }
		 return true;
	 }
	 
	 public static void setAccessUrl(HttpServletRequest request,List<String> accessUrls){ 
		 setAttr(request, SESSION_ACCESS_URLS, accessUrls);
	 }
	 
	 public static boolean isAccessUrl(HttpServletRequest request,String url){ 
		 List<String> accessUrls = (List)getAttr(request, SESSION_ACCESS_URLS);
		 if(accessUrls == null ||accessUrls.isEmpty() || !accessUrls.contains(url)){
			 return false;
		 }
		 return true;
	 }
	 
	 public static void setMemuBtnMap(HttpServletRequest request,Map<String,List> btnMap){ 
		 setAttr(request, SESSION_MENUBTN_MAP, btnMap);
	 }
	 public static List<String> getMemuBtnListVal(HttpServletRequest request,String menuUri){ 
		 Map btnMap  = (Map)getAttr(request, SESSION_MENUBTN_MAP);
		 if(btnMap == null || btnMap.isEmpty()){
			 return null;
		 }
		 return (List<String>)btnMap.get(menuUri);
	 }
	 

}
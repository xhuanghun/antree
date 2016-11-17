package com.antree.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.antree.bean.SysLog;
import com.antree.mapper.SysLogMapper;
import com.antree.model.SysLogModel;

/**
 * 
 * <br>
 * <b>功能：</b>SysUserService<br>
 * <b>作者：</b>黄贵群<br>
 * <b>日期：</b> Jun 9, 2013 <br>
 * <b>版权所有：<b>版权所有(C) 2013，WWW.HAINANJT.GOV.CN<br>
 */
@Service("sysLogService")
public class SysLogService<T> extends BaseService<T> {
    private final static Logger log= Logger.getLogger(SysLogService.class);
	
    /**
	 * 添加日记
	 * @param login
	 * @param name
	 * @param ipAddrs
	 * @param content
	 * @param createTime
	 * @param descr
	 * @return
	 */
    
	public T queryLog(String login,String content){
		SysLogModel model = new SysLogModel();
		model.setLogin(login);
		model.setContent(content);
		return getMapper().queryLog(model);
	}
	
	
	@Autowired
    private SysLogMapper<T> mapper;

		
	public SysLogMapper<T> getMapper() {
		return mapper;
	}
}


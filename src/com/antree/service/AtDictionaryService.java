package com.antree.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.antree.bean.AtDictionary;
import com.antree.mapper.AtDictionaryMapper;
import com.antree.model.AtDictionaryModel;;

/**
 * 
 * <br>
 * <b>功能：</b>AtDictionaryService<br>
 * <b>作者：</b>黄贵群<br>
 * <b>日期：</b> <br>
 * <b>版权所有：<b>版权所有(C)<br>
 */
@Service("atDictionaryService")
public class AtDictionaryService<T> extends BaseService<T> {
	private final static Logger log= Logger.getLogger(AtDictionaryService.class);	
		
	
	@Autowired
    private AtDictionaryMapper<T> mapper;

		
	public AtDictionaryMapper<T> getMapper() {
		return mapper;
	}

}

package com.antree.service;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.antree.mapper.CommentMapper;


/**
 * 
 * <br>
 * <b>功能：</b>CommentService<br>
 * <b>作者：</b>黄贵群<br>
 * <b>日期：</b>  <br>
 * <b>版权所有：
 */
@Service("commentService")
public class CommentService<T> extends BaseService<T> {
	private final static Logger log= Logger.getLogger(CommentService.class);
	
		
	
	@Autowired
    private CommentMapper<T> mapper;

		
	public CommentMapper<T> getMapper() {
		return mapper;
	}

}

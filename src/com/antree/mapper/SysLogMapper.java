package com.antree.mapper;

import com.antree.model.SysLogModel;

public interface SysLogMapper<T> extends BaseMapper<T>{

	public T queryLog(SysLogModel model);
}

package com.antree.mapper;
import com.antree.model.QRCodeModel;
public interface QRCodeMapper<T> extends BaseMapper<T> {	
	public T queryByCode(QRCodeModel model);	 
}

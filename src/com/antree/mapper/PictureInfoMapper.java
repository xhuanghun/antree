package com.antree.mapper;

import com.antree.model.PictureInfoModel;
import java.util.List;
public interface PictureInfoMapper<T> extends BaseMapper<T> {
	
	public T querybyId(PictureInfoModel model);
		
    public List<T> queryByCode(PictureInfoModel model);
    
    public Object queryBlobById(long id);
}

package com.antree.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.antree.bean.SysRole;
import com.antree.bean.SysRoleRel;
import com.antree.bean.SysRoleRel.RelType;
import com.antree.mapper.SysUserMapper;
import com.antree.model.SysUserModel;

/**
 * 
 * <br>
 * <b>功能：</b>SysUserService<br>
 * <b>作者：</b>黄贵群<br>
 * <b>日期：</b> Jun 9, 2013 <br>
 * <b>版权所有：<b>版权所有(C) 2013，WWW.HAINANJT.GOV.CN<br>
 */
@Service("sysUserService")
public class SysUserService<T> extends BaseService<T> {
	private final static Logger log= Logger.getLogger(SysUserService.class);
	
	@Autowired
	private SysRoleRelService<SysRoleRel> sysRoleRelService;

	@Override
	public void delete(Object[] ids) throws Exception {
		super.delete(ids);
		for(Object id :  ids){
			sysRoleRelService.deleteByObjId((Integer)id, RelType.USER.key);
		}
	}
	/**
	 * 检查登录
	 * @param login
	 * @param pwd
	 * @return
	 */
	public T queryLogin(String login,String pwd){
		SysUserModel model = new SysUserModel();
		model.setLogin(login);
		model.setPwd(pwd);
		return getMapper().queryLogin(model);
	}
	
	/**
	 * SSO检查登录
	 * @param login
	 * @return
	 */
	public T queryBySSOLogin(String login){
		SysUserModel model = new SysUserModel();
		model.setLogin(login);
		return getMapper().queryBySSOLogin(model);
	}
	
	/**
	 * 查询邮箱总数，检查是否存在
	 * @param login
	 * @return
	 */
	public int getUserCountByLogin(String login){
		return getMapper().getUserCountByLogin(login);
	}
	
	/**
	 * 查询用户权限
	 * @param userId
	 * @return
	 */
	public List<SysRoleRel> getUserRole(Integer userId){
		return sysRoleRelService.queryByObjId(userId,RelType.USER.key);
	}
	
	/**
	 * 添加用户权限
	 * @param userId
	 * @param roleIds
	 * @throws Exception
	 */
	public void addUserRole(Integer userId,Integer[] roleIds) throws Exception{
		if(userId == null ||  roleIds == null || roleIds.length < 1 ){ 
			return;
		}
		//清除关联关系
		sysRoleRelService.deleteByObjId(userId, RelType.USER.key);
		for(Integer roleId :roleIds ){ 
			SysRoleRel rel = new SysRoleRel();
			rel.setRoleId(roleId);
			rel.setObjId(userId);
			rel.setRelType(RelType.USER.key);
			sysRoleRelService.add(rel);
		}
	}
	
	
	@Autowired
    private SysUserMapper<T> mapper;

		
	public SysUserMapper<T> getMapper() {
		return mapper;
	}

}

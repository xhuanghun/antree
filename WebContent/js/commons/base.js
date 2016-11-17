$package('antree');
var antree={
	/*Json 工具类*/
	isJson:function(str){
		var obj = null; 
		try{
			obj = antree.paserJson(str);
		}catch(e){
			return false;
		}
		var result = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length; 
		return result;
	},
	paserJson:function(str){
		return eval("("+str+")");
	},
	/*弹出框*/
	alert:function(title, msg, icon, callback){
		$.messager.alert(title,msg,icon,callback);
	},
	/*弹出框*/
	confirm:function(title, msg,callback){
		$.messager.confirm(title,msg,callback);
	},
	progress:function(title,msg){
		 var win = $.messager.progress({  
            title: title ||'请稍等',  
            msg: msg ||'载入中...'  
         }); 
	},
	closeProgress:function(){
		$.messager.progress('close');
	},
	/*重新登录页面*/
	toLogin:function(){
		window.top.location= urls['msUrl']+"/login.shtml";
	},
	checkLogin:function(data){//检查是否登录超时
		if(data.logoutFlag){
			antree.closeProgress();
			antree.alert('提示',"登录超时,点击确定重新登录.",'error',antree.toLogin);
			return false;
		}
		return true;
	},
	ajaxSubmit:function(form,option){
		form.ajaxSubmit(option);
	},
	ajaxJson: function(url,option,callback){
		$.ajax(url,{
			type:'post',
			 	dataType:'json',
			 	data:option,
			 	success:function(data){
			 		//坚持登录
			 		if(!antree.checkLogin(data)){
			 			return false;
			 		}		 	
			 		if($.isFunction(callback)){
			 			callback(data);
			 		}
			 	},
			 	error:function(response, textStatus, errorThrown){
			 		try{
			 			antree.closeProgress();
			 			var data = $.parseJSON(response.responseText);
				 		//检查登录
				 		if(!antree.checkLogin(data)){
				 			return false;
				 		}else{
				 			antree.alert('提示', data.msg || "请求出现异常,请联系管理员",'error');
					 	}
			 		}catch(e){
			 			alert(e);
			 			antree.alert('提示',"请求出现异常,请联系管理员1",'error');
			 		}
			 	},
			 	complete:function(){
			 	
			 	}
		});
	},
	submitForm:function(form,callback,dataType){
			var option =
			{
			 	type:'post',
			 	dataType: dataType||'json',
			 	success:function(data){
			 		if($.isFunction(callback)){
			 			callback(data);
			 		}
			 	},
			 	error:function(response, textStatus, errorThrown){
			 		try{
			 			antree.closeProgress();
			 			var data = $.parseJSON(response.responseText);
				 		//检查登录
				 		if(!antree.checkLogin(data)){
				 			return false;
				 		}else{
				 			antree.alert('提示', data.msg || "请求出现异常,请联系管理员",'error');
					 	}
			 		}catch(e){
			 			alert(e);
			 			antree.alert('提示',"请求出现异常,请联系管理员1",'error');
			 		}
			 	},
			 	complete:function(){
			 	
			 	}
			 }
			antree.ajaxSubmit(form,option);
	},
	saveForm:function(form,callback){
		if(form.form('validate')){
			antree.progress('请稍等','正在保存...');
			//ajax提交form
			antree.submitForm(form,function(data){
				antree.closeProgress();
			 	if(data.success){
			 		if(callback){
				       	callback(data);
				    }else{
				    	antree.alert('提示','保存成功.','info');
			        } 
		        }else{
		        	antree.alert('提示',data.msg,'error');  
		        }
			});
		 }
	},
	/**
	 * 
	 * @param {} url
	 * @param {} option {id:''} 
	 */
	getById:function(url,option,callback){
		antree.progress();
		antree.ajaxJson(url,option,function(data){
			antree.closeProgress();
			if(data.success){
				if(callback){
			       	callback(data);
			    }
			}else{
				antree.alert('提示',data.msg,'error');  
			}
		});
	},
	deleteForm:function(url,option,callback){
		antree.progress();
		antree.ajaxJson(url,option,function(data){
			antree.closeProgress();
				if(data.success){
					if(callback){
				       	callback(data);
				    }
				}else{
					antree.alert('提示',result.msg,'error');  
				}
		});
	}
}

/* 自定义密码验证*/
$.extend($.fn.validatebox.defaults.rules, {  
    equals: {  
        validator: function(value,param){  
            return value == $(param[0]).val();  
        },  
        message: '确认密码与新密码不一致.'  
    }  
});  

/*表单转成json数据*/
$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [ o[this.name] ];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
}

/* easyui datagrid 添加和删除按钮方法*/
$.extend($.fn.datagrid.methods, {  
    addToolbarItem: function(jq, items){  
        return jq.each(function(){  
            var toolbar = $(this).parent().prev("div.datagrid-toolbar");
            for(var i = 0;i<items.length;i++){
                var item = items[i];
                if(item === "-"){
                    toolbar.append('<div class="datagrid-btn-separator"></div>');
                }else{
                    var btn=$("<a href=\"javascript:void(0)\"></a>");
                    btn[0].onclick=eval(item.handler||function(){});
                    btn.css("float","left").appendTo(toolbar).linkbutton($.extend({},item,{plain:true}));
                }
            }
            toolbar = null;
        });  
    },
    removeToolbarItem: function(jq, param){  
        return jq.each(function(){  
            var btns = $(this).parent().prev("div.datagrid-toolbar").children("a");
            var cbtn = null;
            if(typeof param == "number"){
                cbtn = btns.eq(param);
            }else if(typeof param == "string"){
                var text = null;
                btns.each(function(){
                    text = $(this).data().linkbutton.options.text;
                    if(text == param){
                        cbtn = $(this);
                        text = null;
                        return;
                    }
                });
            } 
            if(cbtn){
                var prev = cbtn.prev()[0];
                var next = cbtn.next()[0];
                if(prev && next && prev.nodeName == "DIV" && prev.nodeName == next.nodeName){
                    $(prev).remove();
                }else if(next && next.nodeName == "DIV"){
                    $(next).remove();
                }else if(prev && prev.nodeName == "DIV"){
                    $(prev).remove();
                }
                cbtn.remove();    
                cbtn= null;
            }                        
        });  
    }                 
});

/* 禁止手工改变输入框的值 */
$.extend($.fn.combo.methods, {
/**
 * 禁用combo文本域
 * @param {Object} jq
 * @param {Object} param stopArrowFocus:是否阻止点击下拉按钮时foucs文本域
 * stoptype:禁用类型，包含disable和readOnly两种方式
 * //datebox
     $('#dd').datebox('disableTextbox',{stoptype:'readonly',stopArrowFocus:true});
   //combobox
     $('#cc,#cc2').combobox('disableTextbox',{stoptype:'readOnly',stopArrowFocus:true});
     function disable(){
			$('#cc').combobox('disable');
		}
		function enable(){
			$('#cc').combobox('enable');
		}
		function disableText(){
			$('#cc,#cc2').combobox('disableTextbox',{stoptype:'readOnly',activeTextArrow:true,stopArrowFocus:true});
		}
		function enableText(){
			$('#cc,#cc2').combobox('enableTextbox');
		}
 */

disableTextbox : function(jq, param) {
    return jq.each(function() {
        param = param || {};
        var textbox = $(this).combo("textbox");
        var that = this;
        var panel = $(this).combo("panel");
        var data = $(this).data('combo');
        if (param.stopArrowFocus) {
            data.stopArrowFocus = param.stopArrowFocus;
            var arrowbox = $.data(this, 'combo').combo.find('span.combo-arrow');
            arrowbox.unbind('click.combo').bind('click.combo', function() {
                if (panel.is(":visible")) {
                    $(that).combo('hidePanel');
                } else {
                    $("div.combo-panel").panel("close");
                    $(that).combo('showPanel');
                }
            });
            textbox.unbind('mousedown.mycombo').bind('mousedown.mycombo', function(e) {
                    e.preventDefault();
            });
        }
        textbox.prop(param.stoptype?param.stoptype:'disabled', true);
        data.stoptype = param.stoptype?param.stoptype:'disabled';
    });
},
/**
 * 还原文本域
 * @param {Object} jq
 */
enableTextbox : function(jq) {
    return jq.each(function() {
        var textbox = $(this).combo("textbox");
        var data = $(this).data('combo');
        if (data.stopArrowFocus) {
            var that = this;
            var panel = $(this).combo("panel");
            var arrowbox = $.data(this, 'combo').combo.find('span.combo-arrow');
            arrowbox.unbind('click.combo').bind('click.combo', function() {
                if (panel.is(":visible")) {
                    $(that).combo('hidePanel');
                } else {
                    $("div.combo-panel").panel("close");
                    $(that).combo('showPanel');
                }
                textbox.focus();
            });
            textbox.unbind('mousedown.mycombo');
            data.stopArrowFocus = null;
        }
        textbox.prop(data.stoptype, false);
        data.stoptype = null;
	        });
	    }
	});

/**
 * 扩展两个方法
 */
$.extend($.fn.datagrid.methods, {
    /**
     * 开打提示功能
     * @param {} jq
     * @param {} params 提示消息框的样式
     * @return {}
     */
    doCellTip: function(jq, params){
        function showTip(data, td, e){
            if ($(td).text() == "") 
                return;
            data.tooltip.text($(td).text()).css({
                top: (e.pageY + 10) + 'px',
                left: (e.pageX + 20) + 'px',
                'z-index': $.fn.window.defaults.zIndex,
                display: 'block'
            });
            //alert(e.pageX+";"+e.pageY);
        };
        return jq.each(function(){
            var grid = $(this);
            var options = $(this).data('datagrid');
            if (!options.tooltip) {
                var panel = grid.datagrid('getPanel').panel('panel');
                var defaultCls = {
                    'border': '1px solid #333',
                    'padding': '2px',
                    'color': '#333',
                    'background': '#f7f5d1',
                    'position': 'absolute',
                    //'max-width': '200px',
                    'max-width': '1000px',
					'border-radius' : '4px',
					'-moz-border-radius' : '4px',
					'-webkit-border-radius' : '4px',
                    'display': 'none'
                }
                var tooltip = $("<div id='celltip'></div>").appendTo('body');
                tooltip.css($.extend({}, defaultCls, params.cls));
                options.tooltip = tooltip;
                panel.find('.datagrid-body').each(function(){
                    var delegateEle = $(this).find('> div.datagrid-body-inner').length ? $(this).find('> div.datagrid-body-inner')[0] : this;
                    $(delegateEle).undelegate('td', 'mouseover').undelegate('td', 'mouseout').undelegate('td', 'mousemove').delegate('td', {
                        'mouseover': function(e){
                            if (params.delay) {
                                if (options.tipDelayTime) 
                                    clearTimeout(options.tipDelayTime);
                                var that = this;
                                options.tipDelayTime = setTimeout(function(){
                                    showTip(options, that, e);
                                }, params.delay);
                            }
                            else {
                                showTip(options, this, e);
                            }
                            
                        },
                        'mouseout': function(e){
                            if (options.tipDelayTime) 
                                clearTimeout(options.tipDelayTime);
                            options.tooltip.css({
                                'display': 'none'
                            });
                        },
                        'mousemove': function(e){
							var that = this;
                            if (options.tipDelayTime) 
                                clearTimeout(options.tipDelayTime);
                            //showTip(options, this, e);
							options.tipDelayTime = setTimeout(function(){
                                    showTip(options, that, e);
                                }, params.delay);
                        }
                    });
                });
                
            }
            
        });
    },
    /**
     * 关闭消息提示功能
     *
     * @param {}
     *            jq
     * @return {}
     */
    cancelCellTip: function(jq){
        return jq.each(function(){
            var data = $(this).data('datagrid');
            if (data.tooltip) {
                data.tooltip.remove();
                data.tooltip = null;
                var panel = $(this).datagrid('getPanel').panel('panel');
                panel.find('.datagrid-body').undelegate('td', 'mouseover').undelegate('td', 'mouseout').undelegate('td', 'mousemove')
            }
            if (data.tipDelayTime) {
                clearTimeout(data.tipDelayTime);
                data.tipDelayTime = null;
            }
        });
    }
});

/*
        function doCellTip(){
			$('#test').datagrid('doCellTip',{'max-width':'100px'});
		}
		function cancelCellTip(){
			$('#test').datagrid('cancelCellTip');
		}
 */

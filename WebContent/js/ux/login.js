$package('antree.login');
antree.login = function(){
	return {
		toLogin:function(){
			try{
				var form = $("#loginForm");
				if(form.form('validate')){
					antree.progress('请稍等','载入中...');
					antree.submitForm(form,function(data){
						antree.closeProgress();
						antree.login.loadVrifyCode();//刷新验证码
						if(data.success){
					 		window.location= "main.shtml";
				        }else{
				        	antree.alert('提示',data.msg,'error');  
				        }
					});
				}
			}catch(e){
				
			}
			return false;
		},
		loadVrifyCode:function(){//刷新验证码  operation
			var _url = "ImageServlet?time="+new Date().getTime();
			$(".vc-pic").attr('src',_url);
		},
		init:function(){
			if(window.top != window.self){
				window.top.location =  window.self.location;
			}
			//验证码图片绑定点击事件
			$(".vc-pic").click(antree.login.loadVrifyCode);
			
			var form = $("#loginForm");
			form.submit(antree.login.toLogin);
		}
	}
}();

$(function(){
	antree.login.init();
});		
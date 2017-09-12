$(function () {
    var vcode_process = {
        node: null,
        count: 45,
        start: function(){
           if(this.count > 0){
              this.node.innerHTML = this.count-- + "秒后重新获取";
              var _this = this;
              setTimeout(function(){
                  _this.start();
              },1000);
           }else{
              this.node.removeAttribute("disabled");
              this.node.classList.remove("weui-btn_disabled", "weui-btn_default");
              this.node.innerHTML = "重新获取";
              //60秒读完，变回开始背景颜色，在这里添加。
              this.count = 45;
           }
        },
        //初始化
        init: function(node){
           this.node = node;
           this.node.setAttribute("disabled",true);
           this.node.classList.add("weui-btn_disabled", "weui-btn_default");
           this.start();
        }
     };
    
    var vcode_btn = document.getElementById("weui-vcode-btn");
     
    vcode_btn.onclick = function(){
        vcode_process.init(vcode_btn);
    };
    
    var phone = $('#phoneInput');
    var vcode = $('#vcodeInput');
    var $registSubmit = $('#registSubmit');
    var submit_btn = document.getElementById("registSubmit");
    var validate = true;

    //删除左右两端的空格
    function trim(str){ 
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }

    function changeState() {
        if(!validate) {
            submit_btn.setAttribute("disabled",true);
            submit_btn.classList.add("weui-btn_disabled", "weui-btn_default");
        }else {
            submit_btn.removeAttribute("disabled");
            submit_btn.classList.remove("weui-btn_disabled", "weui-btn_default");
        }
    }

    phone.on('blur', function() {
        var phoneNum = trim(phone.val());
        
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
        if(phoneNum.length == 0) { 
            weui.topTips('手机号码不能为空！');
            validate = false;
        } else if(phoneNum.length != 11) { 
            weui.topTips('请输入有效的手机号码，需是11位！');
            validate = false;
        }else if(!myreg.test(phoneNum)) { 
            weui.topTips('请输入有效的手机号码！'); 
            validate = false;
        }else {
            validate = true;
        }
        changeState();
    });

    // 校验验证码
    vcode.on('blur', function() {
        var vcodeVal = trim(vcode.val());
        
        if(vcodeVal.length == 0) { 
            weui.topTips('验证码不能为空！');
            validate = false;
        } else if(vcodeVal != '1234') {   // 从接口获取验证码，进行对比
            weui.topTips('验证码输入不一致');
            validate = false;
        }else {
            validate = true;
        }
        changeState();
    });
    
    $registSubmit.on('click', function () {
        if(validate) {
            // 获取输入的数据，进行校验，最后提交
            var loading = weui.loading('提交中...');
            setTimeout(function () {
                loading.hide();
                weui.toast('提交成功', 2000);
            }, 1500);
        }else {
            weui.topTips('表单输入有误！'); 
        }
    });


});
$(function () {
    $('.weui-tabbar__item').on('click', function () {
        $(this).addClass('weui-bar__item_on').siblings().removeClass('weui-bar__item_on');
        var tabId = $(this).attr('href');
        $('.weui-tab__bd').find(tabId).addClass('weui-tab__bd-item--active').siblings().removeClass('weui-tab__bd-item--active');
    });

	 // 性别
	$("#picker").picker({
		title: "性别",
		cols: [
		    {
		      textAlign: 'center',
		      values: ['男', '女']
		    }
		]
	});

	// 出生年月
	$("#time").datetimePicker({
		title: '出生年月',
        times: function () {},
	    onChange: function (picker, values, displayValues) {
	        console.log(values);
	    }
    });


});
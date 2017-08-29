document.createElement('aco');
// Canvas1 画矩形框
var c1=document.getElementById("myCanvas1");
var ctx1=c1.getContext("2d");
ctx1.fillStyle="#92B901";
ctx1.fillRect(25,25,50,50);

// Canvas2 画圆形
var c2=document.getElementById("myCanvas2");
var ctx2=c2.getContext("2d");
ctx2.fillStyle="#92B901";
ctx2.moveTo(0,0);
ctx2.lineTo(100,100);
ctx2.stroke();

// canvas3 画线段
var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext('2d');
ctx3.beginPath();
ctx3.arc(50,50,50,0,2*Math.PI);
ctx3.stroke();

// canvas4 画文字
var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext('2d');
ctx4.font = "16px Arial";
ctx4.fillText("Hello World!", 10, 50);
//ctx4.strokeText("Hello World",10,50); // 空心

// canvas5 画渐变
var c5=document.getElementById("myCanvas5");
var ctx5=c5.getContext("2d");
// 创建渐变
//var grd=ctx5.createLinearGradient(0,0,200,0); //矩形
var grd=ctx5.createRadialGradient(5,50,5,90,50,100);   //圆形
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
// 填充渐变
ctx5.fillStyle=grd;
ctx5.fillRect(0,10,100,80);

// canvas
var c6=document.getElementById("myCanvas6");
var ctx6=c6.getContext("2d");
var img=document.getElementById("textImg");
ctx6.drawImage(img,0,0);

function allowDrop(ev) {    //ondragover 事件规定在何处放置被拖动的数据。默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。
    ev.preventDefault();
}

function drag(ev) {     //ondragstart 属性调用了一个函数，drag(event)，它规定了被拖动的数据。
    ev.dataTransfer.setData("Text", ev.target.id);  //dataTransfer.setData() 方法设置被拖数据的数据类型和值：
}

function drop(ev) { //当放置被拖数据时，会发生 drop 事件。
    ev.preventDefault();    //调用 preventDefault() 来避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）
    var data = ev.dataTransfer.getData("Text"); //通过 dataTransfer.getData("Text") 方法获得被拖的数据。该方法将返回在 setData() 方法中设置为相同类型的任何数据。
    ev.target.appendChild(document.getElementById(data));   //被拖数据是被拖元素的 id ("drag1")
}

// vide0
var myVideo = document.getElementById("test-video"); 

function togglePlay()
{ 
	if (myVideo.paused) 
	  myVideo.play(); 
	else 
	  myVideo.pause(); 
} 


// location
var x=document.getElementById("geo-location");
function getLocation()
{
	if (navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(showPosition,showError);
	}
	else
	{
		x.innerHTML="该浏览器不支持获取地理位置。";
	}
}

function showPosition(position)
{
	var latlon=position.coords.latitude+","+position.coords.longitude;

	var img_url="http://maps.googleapis.com/maps/api/staticmap?center="
	+latlon+"&zoom=14&size=400x300&sensor=false";
	document.getElementById("mapholder").innerHTML="<img src='"+img_url+"'>";
}

function showError(error)
{
	switch(error.code) 
	{
		case error.PERMISSION_DENIED:
			x.innerHTML="用户拒绝对获取地理位置的请求。"
			break;
		case error.POSITION_UNAVAILABLE:
			x.innerHTML="位置信息是不可用的。"
			break;
		case error.TIMEOUT:
			x.innerHTML="请求用户地理位置超时。"
			break;
		case error.UNKNOWN_ERROR:
			x.innerHTML="未知错误。"
			break;
	}
}
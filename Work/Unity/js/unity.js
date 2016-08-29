var speed = 100;
var scrollTop = null;
var hold = 0;
var float_banner;
var pos = null;
var timer = null;
var moveHeight = null;
float_banner = document.getElementById("xuanfu");
window.onscroll =scroll_ad;

function scroll_ad(){
	
	scrollTop = document.documentElement.scrollTop +document.body.scrollTop;
	
	pos = scrollTop -  float_banner.offsetTop;
	pos = pos / 10;
	moveHeight = pos > 0 ? Math.ceil(pos) : Math.floor(pos);
	
	if(moveHeight != 0){
		float_banner.style.top = float_banner.offsetTop +moveHeight + 56 +'px';
		setTimeout(scroll_ad,speed);
	}
}

function  setCss () {
	
}

$('#daojishi').each(function  (e) {
	start_my($(this));
});

function start_my(target){
	var set = setInterval(function  () {
		updateTime(target);
	},1000);
}



function updateTime(target){
	
	var now_date = new Date();
	var target_date = new Date();
	
//	天数
	target_date.setFullYear(2017);
//	月数
	target_date.setMonth(3);
//	天数
	target_date.setDate(18);
//	小时
	target_date.setHours(15);
//	分钟
	target_date.setMinutes(4);
//	秒
	target_date.setSeconds(35);
	
	var remain = (target_date.getTime() - now_date.getTime()) / 1000;
	
	if(remain <= 0)
	{
		target.html('倒计时<span id="day">00</span>天<span id="hour">00</span>时<span id="minute">00</span>分<span id="second">00</span>秒');
	}
	else{
		
		
		var day = parseInt(remain/86400);
		remain%=86400;
		
		var hour = parseInt(remain/3600);
		remain%=3600;
		
		var min = parseInt(remain/60);
		remain%=60;
		
		var sec = parseInt(remain);
		
		target.html('倒计时<span id="day"> ' + day + '</span>天<span id="hour"> ' + fillZero(hour,2) + '</span>时<span id="minute">' + fillZero(min,2) + '</span>分<span id="second"> ' + fillZero(sec,2) + '</span>秒');
	}
	
}

function fillZero(num,digit){
	
	var str = num.toString();
	
	while(str.length  < digit){
		str = '0' +str;
	}

	return   str;
}


var pull_left = true;
var now_Left = $('#xuanfu').offset().left;

$('#close_button').click(function  () {
  	
  	
	if(pull_left)
	{

		$('#close_button').html('<button id="close_button"><img  style="width: 3%;position: absolute;top: 3.8%;right: 0%;width:46px;height:130px;" src="img/index/youjiantou.png"/></button>');

		pullLeft(moveHeight);

		pull_left = false;
	}
	else
	{
		$('#xuanfu').css({'position':'absolute','left' :'50%','margin-left' :'-600px'});
		
		var setStart = setInterval(function  () {
		
		if( now_Left >= 489)
		{
			clearInterval(setStart);
			$('#close_button').html('<img  style="width: 3%;position: absolute;top: 2%;right: 0%;" src="img/index/close.png"/>');
		}
	
		now_Left += 10;
		pos = now_Left / 10;
		moveHeight = Math.floor(pos);
		pullRight(moveHeight ,pull_left);
		
		},10);
		
		pull_left = true;
	}
})

function pullRight (moveHeight) {
	$('#xuanfu').css('position','absolute');
	$('#xuanfu').css({'left':moveHeight + '%'});
}

function pullLeft(moveHeight)
{
	$('#xuanfu').css({'left':0,'margin-left' : -1152});
}















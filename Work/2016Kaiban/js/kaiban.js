window.onload = function  () {
	//倒计时
	$(".countdown_time").each(function  () {
		setInt($(this));
	});
	
	function setInt(target){
		var satrt = setInterval(function  () {
			updateTime(target)
		},1000);
	}
	
	function updateTime(target){
		
		var now_time = new Date();
		var target_time = new Date();
		
		//必须得全部设置
		target_time.setFullYear(parseInt(target.html().split('-')[0]));
		target_time.setMonth(parseInt( target.html().split('-')[1] - 1));
		target_time.setDate(target.html().split('-')[2]);
		target_time.setHours(target.html().split('-')[3]);
		target_time.setMinutes(target.html().split('-')[4]);
		target_time.setSeconds(target.html().split('-')[5]);
		
		//时间比较
		var remain = (target_time.getTime() - now_time.getTime()) / 1000;
		
		if(remain <= 0){
			
			target.prev().prev().html('距离开班<span>000</span>天<span>00</span>时<span>00</span>分<span>00</span>秒');
		}
		else{
			
			//获得具体时间
			var day = parseInt(remain/86400);
			remain%=86400;
			
			var hour = parseInt(remain/3600);
			remain%=3600;
			
			var min = parseInt(remain/60);
			remain%=60;
			
			var sec = parseInt(remain);
			
			target.prev().prev().html('距离开班<span>' + setLength(day,3) + '</span>天<span> ' + setLength(hour,2) + '</span>时<span>' + setLength(min,2) + '</span>分<span > ' + setLength(sec,2) + '</span>秒');
			
			
		}
	}
	
	//设置数字的长短  1->01
	function setLength(num,length){
		
		var str = num.toString();
		
		if(str.length < length){
			str = '0' + str;
		}
		
		return str;
	}


//淡入淡出
	var oDiv = document.getElementById('tab');
	var oLi = oDiv.getElementsByTagName('div')[1].getElementsByTagName('li');
	var aCon = oDiv.getElementsByTagName('div')[2].getElementsByTagName('div');
	
	var timer = null;
	
	for (var i = 0; i < oLi.length;++i) {
		//设置唯一的index
		oLi[i].index = i;
		oLi[i].onmouseover = function  () {
		
			show(this.index);
		}
	}
	
	function show (num) {
		index = num;
		
		var scale = 0;
		
		for (var i = 0; i <oLi.length; ++i) {
			//遍历所有的title（名字），把他的classname设置空，有损性能
			aCon[i].className = "";
		}
		
		//给要淡入淡出的titile加上设置好的class
		aCon[index].className = "cur";
	}
	
	var distance = parseInt( $('.teacher_info').css('width'));

	//老师滚动
	//获取所有div的个数 * 单个div的width
//	var distance = $('.all_teacher').length * 294;
	//记录第几次点击，方便下一次点击的时候，从 leng * count这个长度开始走，不然的话会从开头开始走
	var count = 0;
	//记录走过的长度
	var i = 0;
	var can_ciick = true;
	
	$('#left').click(function  () {
		
		if(can_ciick){
			
//			i = 0;
			
			//如果长度为3000，走了2000就不能走了，所以要在长度上减去1
			++count;
			if(count >= parseInt($('.all_teacher').length / 4 + 1)){
				--count;
				return;
			}
			
			can_ciick = false;
			var set = setInterval(function  () {
				
				i -= 10;
				//设置i一次所走的长度，一次显示4个，所以一次走width / 4个
				if(i <= -distance * count){
					can_ciick = true;
					clearInterval(set);
				}
				updateTime_teacher(i);
			},20);
		}
		
	});
	
		$('#right').click(function  () {
		
		if(count == 0){
			return;
		}
		
		if(can_ciick){
			
//			i = 0;
			can_ciick = false;
			//如果长度为3000，走了2000就不能走了，所以要在长度上减去1
			
			--count;
			var set = setInterval(function  () {
				
				i += 10;
				//设置i一次所走的长度，一次显示4个，所以一次走width / 4个
				if(i + 24> -distance * count){
					can_ciick = true;
					clearInterval(set);
				}
				updateTime_teacher(i);
			},20);
		}
		
	});
	
	function updateTime_teacher (i) {
		scroll(i);
	}
	
	function scroll (distance) {
		$('#scroll_second').css('left',distance);
	}
}



































//下划线
$(function  () {
	$('.title_wenzi a').each(function () {
		
		$(this).click(function  () {
			$('.active_a').removeClass('active_a');
		    $(this).parent().addClass('active_a');
		    $(this).parent().css('color','red');
		})
	})
})

//悬停
 $(function(){
   var AllHet = $(window).height();
   var mainHet= $('.anniu_job').height();
   var fixedTop = (AllHet - mainHet)/3

   $(window).scroll(scrolls)
   scrolls()
   function scrolls(){
	 
	   var sTop = $(window).scrollTop();
	
	   var topPx = sTop+fixedTop
	    $('.anniu_job').stop().animate({top:topPx});

    }
})

//报名
 $("#submitBtn").on("click", function(){
        //$("body").css("background-color","white");
        console.log("submit");
        var name = $("#name").val();
        var mobile = $("#mobile").val();
        if( name == "" || mobile == "" ){
           alert('name mobile 不能为空');
        }else{
            //console.log(name + ' ' + mobile);
            alert('提交成功!我们的课程顾问稍后会联系您!');
            $.post("http://www.taikr.com/edu/baoming/i.php", { name: name, mobile: mobile ,category: 'kf'} );
        }
        
    });
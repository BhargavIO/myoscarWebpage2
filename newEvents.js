$(function(){
	$(".add").click(function(){
	
		$(".addBlockPopup").css("display","block");
	});
	$(".cancel").click(function(){
	
		$(".addBlockPopup").css("display","none");
	
	});
	
	$(".btn").click(function(e) {
 	   	e.preventDefault();
  		
  		$(this).parent(".table-cont").find(".table");
  			console.log(parent);
  		$(this).parent(".table-cont").find(".parent").closest("tr").nextUntil(".parent").toggleClass("open");
	});

 function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
            $(".date").text(today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear());
        $(".time").text( h + ":" + m + ":" + s);
        t = setTimeout(function () {
            startTime()
        }, 500);
    }

    startTime();


});
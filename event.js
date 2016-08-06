$('#header').dblclick(function () {
	$(this).attr('style','color : red');
});

$(document).ready(function(){
	$('#menu').mouseover(function(){
		$('.ID, .PW').css("background-color", "#b3d9ff");
		$('.active').css("background-color", "#b3d9ff");
		$('.sign_up').css("background-color", "#b3d9ff");
	});
	$("#menu").mouseout(function(){
        $(".ID, .PW").css("background-color", "#b3d9ff");
		$(".active").css("background-color", "##b3d9ff");
		$(".sign_up").css("background-color", "#b3d9ff");
    });
});

$(document).ready(function(){//ID&PW 입력
	$('.ID, .PW, .login').hide();
	$('.open').click(function(){
		$('.ID, .PW, .login').toggle();
	});
});



$(document).ready(function() {
  var modalLayer = $("#modalLayer");
  var modalLink = $(".modalLink");
  var modalCont = $(".modalContent");
  var marginLeft = modalCont.outerWidth() / 2;
  var marginTop = modalCont.outerHeight() / 2;

  modalLink.click(function() {
    modalLayer.fadeIn("slow");
    modalCont.css({
      "margin-top": -marginTop,
      "margin-left": -marginLeft
    });
    $(this).blur();
    $(".modalContent > a").focus();
    return false;
  });

  $(".modalContent > button").click(function() {
    modalLayer.fadeOut("slow");
    modalLink.focus();
  });
});

function images_1(){
	var x = document.createElement("IMG");
    x.setAttribute("src","photo1.jpg");
	x.setAttribute("src","photo2.jpg");
    x.setAttribute("width", "200px");
	x.setAttribute("width", "200px");
	//x.setAttribute("alt", "The Pulpit Rock");
	document.body.appendChild(x);
   
}
function images_2(){
	document.body.style.backgroundImage = "url('web.jpg')";
		
}
$(document).ready(function(){
    $("#back").click(function(){
        $("#contents").css({"background-color": "yellow"});
    });
});

$("#changing").click(function(){
	$("#ch").fadeToggle();
});

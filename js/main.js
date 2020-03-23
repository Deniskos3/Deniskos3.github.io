	


	$(document).ready(function(){

	 
			// кнопка "готовые или свои конфигурации"
$(".m-items_button").on("click",function(){
	$('.back').css("transform", "translate(108%, 5px)");
	$('.back').css("border-radius", " 0 20px 0 0");
	$('.back').css("width", "47.3%");
	$('.butone').css("color", "#626273"); 
	$('.butone').css("font-weight", "400"); 
	$('.buttwo').css("color", "#000"); 
	$('.buttwo').css("font-weight", "500"); 
	$('.buttwo').css("cursor", "default"); 	
	$('.butone').css("cursor", "pointer");
	$('.line').css("display", "none");
	$('.yourselfborder').css("display","block");
});
$('.butone ').on("click",function(){
				$('.back').css("transform", "translate(0px, 5px)");
				$('.back').css("border-radius", " 0 0 0 20px");
				$('.back').css("width", "50%");
				$('.buttwo').css("color", "#626273"); 
				$('.buttwo').css("font-weight", "400"); 
				$('.butone').css("color", "#000"); 
				$('.butone').css("font-weight", "500");
				$('.butone').css("cursor", "default");
				$('.buttwo').css("cursor", "pointer");
				$('.line').css("display", "block");
				$('.yourselfborder').css("display","none");
			});
			$('.buttwo').on("click",function showblock(){
				$('.back').css("transform", "translate(108%, 5px)");
				$('.back').css("border-radius", " 0 20px 0 0");
				$('.back').css("width", "47.3%");
				$('.butone').css("color", "#626273"); 
				$('.butone').css("font-weight", "400"); 
				$('.buttwo').css("color", "#000"); 
				$('.buttwo').css("font-weight", "500"); 
				$('.buttwo').css("cursor", "default"); 	
				$('.butone').css("cursor", "pointer");
				$('.line').css("display", "none");
				$('.yourselfborder').css("display","block");

			});
			
		
			// кнопка тип диска
			$('.ssd').click(function(){
					$(this).closest(".panelborder").find(".panelanim").css("transform", "translate(6px, 6px)");
					$(this).closest(".panelborder").find(".panelanim").css("border-top-right-radius", "0px");
					$(this).closest(".panelborder").find(".panelone").addClass("black");
					$(this).closest(".panelborder").find(".paneltwo").removeClass("black");
					$(this).prop( "checked", true );
					$(this).closest(".panelborder").find(".hdd").prop( "checked", false );
			});
				$('.hdd').click(function(){
					$(this).closest(".panelborder").find(".panelanim").css("transform", "translate(105px, 6px)");
					$(this).closest(".panelborder").find(".panelanim").css("border-top-right-radius", "16px");
					$(this).closest(".panelborder").find(".paneltwo").addClass("black");
					$(this).closest(".panelborder").find(".panelone").removeClass("black");
					$(this).prop( "checked", true );
					$(this).closest(".panelborder").find(".ssd").prop( "checked", false );
			});
		 
		 // кнопка опер сис
		 $('.windows').click(function(){
					$(this).closest(".panelborder").find(".panelanim").css("transform", "translate(6px, 6px)");
					$(this).closest(".panelborder").find(".panelanim").css("border-bottom-left-radius", "16px");
					$(this).closest(".panelborder").find(".panelone").addClass("black");
					$(this).closest(".panelborder").find(".paneltwo").removeClass("black");
					$(this).prop( "checked", true );
					$(this).closest(".panelborder").find(".linux").prop( "checked", false );

			});
		 	$('.linux').click(function(){
					$(this).closest(".panelborder").find(".panelanim").css("transform", "translate(108px, 6px)");
					$(this).closest(".panelborder").find(".panelanim").css("border-bottom-left-radius", "0px");
					$(this).closest(".panelborder").find(".paneltwo").addClass("black");
					$(this).closest(".panelborder").find(".panelone").removeClass("black");
					$(this).prop( "checked", true );
					$(this).closest(".panelborder").find(".windows").prop( "checked", false );
			});
		 

		 	// кнопки прибавить и убавить в своей конфигурации

		$('.plus').click(function() {
  let input = $(this).closest(".counter").find("input");
  let step = $(this).closest(".counter").find("input").attr("step");	
  input.val(+input.val() + Number(step));
});

$('.minus').click(function() {
  let input = $(this).closest(".counter").find("input");
  let step = $(this).closest(".counter").find("input").attr("step");
  if (input.val()>1){
  input.val(+input.val() - Number(step));
 }
});

		// своя конфиг wind and lin

 $('.windowstwo').click(function(){
 	$(this).closest(".maincounter").find(".help").css("transform", "translate(5%, 16%)");
					$(this).prop( "checked", true );
					$(this).closest(".maincounter").find(".linuxtwo").prop( "checked", false );
					$(this).closest(".maincounter").find(".panelone").addClass("black");
					$(this).closest(".maincounter").find(".paneltwo").removeClass("black");

			});
  $('.linuxtwo').click(function(){
 	$(this).closest(".maincounter").find(".help").css("transform", "translate(103%, 16%)");
			$(this).prop( "checked", true );
			$(this).closest(".maincounter").find(".windowstwo").prop( "checked", false);
			$(this).closest(".maincounter").find(".paneltwo").addClass("black");
			$(this).closest(".maincounter").find(".panelone").removeClass("black");
			});

  // кнопка SSD HDD hSSD
  	$('.ssdtwo').click(function(){
  		$(this).closest(".maincounter").find(".help-one").css("transform", "translate(11%, 16%)");
  		$(this).prop( "checked", true );
  		$(this).closest(".maincounter").find(".hddtwo").prop( "checked", false);
  		$(this).closest(".maincounter").find(".hssdtwo").prop( "checked", false);
  		$(this).closest(".maincounter").find(".panelone").addClass("black");
  		$(this).closest(".maincounter").find(".paneltwo").removeClass("black");
  		$(this).closest(".maincounter").find(".panelthree").removeClass("black");
  	});
  	$('.hssdtwo').click(function(){
  		$(this).closest(".maincounter").find(".help-one").css("transform", "translate(212%, 16%)");
  		$(this).prop( "checked", true );
  		$(this).closest(".maincounter").find(".ssdtwo").prop( "checked", false);
  		$(this).closest(".maincounter").find(".hddtwo").prop( "checked", false);
  		$(this).closest(".maincounter").find(".panelthree").addClass("black");
  		$(this).closest(".maincounter").find(".paneltwo").removeClass("black");
  		$(this).closest(".maincounter").find(".panelone").removeClass("black");
  	});
  	$('.hddtwo').click(function(){
  		$(this).closest(".maincounter").find(".help-one").css("transform", "translate(106%, 16%)");
  		$(this).prop( "checked", true );
  		$(this).closest(".maincounter").find(".ssdtwo").prop( "checked", false);
  		$(this).closest(".maincounter").find(".hssdtwo").prop( "checked", false);
  		$(this).closest(".maincounter").find(".paneltwo").addClass("black");
  		$(this).closest(".maincounter").find(".panelone").removeClass("black");
  		$(this).closest(".maincounter").find(".panelthree").removeClass("black");
  	});
  
  	$('.itemsbody').on("click",function(){
  		let pricemonth_items=0;
  	 let pricemin_items =0;
  		let cpu_items=$(this).find(".setcpu").text();
  		let ram_items=$(this).find(".setram").text();
  		let gb_items=$(this).find(".setgb").text();
  		let tip_items =0.001;
  		let tipmount_items=40;
 		 let tip2_items=0;
			 let tipmount2_items=0;

			 if($(this).find('.ssd').prop('checked')){
				 let tip_items=0.002;
				 let tipmount_items=100
				}
				if($(this).find('.windows').prop('checked')){
				 let tip2_items=0.007;
				 let tipmount2_items=290;
				}
			pricemonth_items=((Number(cpu_items)*510)+(Number(ram_items)*190)+((Number(gb_items)/10)*Number(tipmount_items))+Number(tipmount2_items));
			pricemin_items=((Number(cpu_items)*0.012)+(Number(ram_items)*0.004)+((Number(gb_items)/10)*Number(tip_items))+Number(tip2_items));
			$(this).find(".setprice").text(pricemonth_items);
			$(this).find(".setmin").text(pricemin_items.toFixed(3));
  	
  			
  	});
  		$(".yourselfborder").on("click",function(){
		  	 var pricemonth=0;
  	 	var pricemin =0;
  	 	var cpu=$("#cpu");
  	 	var ram=$("#ram");
  	 	var gb=$("#gb")
  	 	var tip=0.001;
				 var tipmount=40;
				 var tip2=0;
				 var tipmount2=0;
				 var num=$("#num");
				 if($('.ssdtwo').prop('checked')){
				 var tip=0.002;
				 var tipmount=100
				 }else if ($('.hhdtwo').prop('checked')){
				 var tip=0.001;
				 var tipmount=40; 
				 }else if ($('.hssdtwo').prop('checked')){
				 var tip=0.003;
				 var tipmount=120; 
				 }
				 if($('.windowstwo').prop('checked')){
				 var tip2=0.007;
				 var tipmount2=290; 
				}
			pricemonth=((cpu.val()*510)+(ram.val()*190)+((gb.val()/10)*tipmount)+tipmount2)*num.val();
			pricemin=((cpu.val()*0.012)+(ram.val()*0.004)+((gb.val()/10)*tip)+tip2)*num.val();
			$("#price1").text(pricemonth);
			$("#price2").text(pricemin.toFixed(3));

	});
	 	});
	
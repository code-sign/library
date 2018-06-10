	//TweenMax.from($('.item01'), 5,{opacity:0});

	function animate1(){
		TweenMax.from( $( ".item01" ), 5, { opacity: 0 } );
	}

	function animate2(){
		TweenMax.from( $( ".item02" ), 1, { rotation: 180, x:100, ease:Elastic.easeOut } );
	}


	function animate3(){
		TweenMax.to(".item03", 1, { 
			scale: function(){
				return Math.random()*1.2;
			},
			rotation: function(){
				return Math.random()*360;
			}
		});
	}

	function animate4(){
		TweenMax.fromTo(".item04",1,{x:10, delay:1}, {x:50, y:30});
	}

	function animate5(){
		move = TweenMax.to(".item05", 1 , {x:100, rotation:180, scale:1.5});
		//after 1 second into the 3-second animations
		TweenMax.delayedCall(1, reverse)

		function reverse(){
			move.reverse();
		}
	}

	function animate6(){
		// item06 : repeat:-1
		var box = document.getElementById("item06"),
			count = 0,
			tween;

		tween = TweenMax.to(box, 2, {x:100, repeat:10, yoyo:true, onRepeat:onRepeat, repeatDelay:0.5, ease:Linear.easeNone});

		function onRepeat() {
		  count++;
		  box.innerHTML = count;
		  TweenLite.set(box, {backgroundColor:"hsl(" + Math.random() * 255 + ", 90%, 60%)"});
		}
	}


	function animate7(){
		// item07 : repeat:-1
		TweenMax.to(".item07",1,{x:50, yoyo:true, repeat:-1});
	}

	function animate8(){
		// item08 : play
		var box8 = $('.item08');
		tween = new TimelineLite();
		tween.to(box8, 1, {x:30});
		tween.to(box8, 1, {y:30});
		tween.to(box8, 1, {x:0, y:0, backgroundColor:'#aaa'});
	}

	function animate9(){
		// item09 : same animation play
		var box1 = $('.item09_1');
		var box2 = $('.item09_2');
		var box3 = $('.item09_3');

		tween = new TimelineLite();
		tween.staggerTo([box1,box2,box3], 1, {rotation:180},0.5);
	}

	function animate10(){
		// item10 : same animation play yoyo // TimelineMax
		var box1 = $('.item10_1');
		var box2 = $('.item10_2');
		var box3 = $('.item10_3');

		tween10 = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:0.5});
		tween10.staggerTo([box1,box2,box3], 1, {rotation:180, borderRadius:'50%', backgroundColor:'#4169e1'},0.5);
	}animate10();

	
	function animate11(){
		var box1 = $('.item11');

		TweenMax.from(box1,1,{scale:2, opacity:0, rotation:360, ease:Back.easeOut});
	} 

			
	function animate12(){
		var obj1 = $('.item12_1');
		var obj2 = $('.item12_2');
		var obj3 = $('.item12_3');

		var objects = [obj1,obj2,obj3];


		TweenMax.staggerFrom(objects,5,{scale:2, opacity:0, rotation:360, ease:Elastic.easeOut}, .4);
	} 


	//item13
	window.onload = function(){

		var box = document.getElementById("item13");
		var x = 0;
		var fn = setInterval(function(){
			var value = x*0.1;
			var left = 50 + Math.floor(Math.sin(value)*40);
			var top = 50 + Math.floor(Math.cos(value)*20);
			var width = 50 + Math.floor(Math.cos(value)*30);
			var height = 50 + Math.floor(Math.cos(value)*30);
			box.style.left = left + "px";
			box.style.top = top + "px";
			box.style.width = width + "px";
			x++;
		}, 30);

	}

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


	
	var mouse = {
		x:undefined,
		y:undefined,
		
	}
	var minradius=5;
	var maxradius=40;
	
	window.addEventListener("mousemove", 
	
	function(event){
		mouse.x = event.x;
		mouse.y = event.y;
	})
	
	window.addEventListener("resize", 
	function(event){
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		
		init();
	})

	
	function Circle(x,y,dx,dy,radius,color){
		this.x = x;
		this.y = y;
		this.dy = dy;
		this.dx = dx;
		this.radius = radius;
		this.color = color;
		this.minradius = radius;
		
		this.draw = function(){ 
			c.beginPath();
			c.arc(this.x, this.y, this.radius, 0,Math.PI *2, false);
			c.fillStyle = this.color;
			c.fill();
 			
		}
		
		this.update = function(){
			if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
			this.dx = -this.dx;
			}
			if (this.y + this.radius > innerHeight || this.y - radius < 0){
				this.dy = -this.dy;
			}
			
			this.x += this.dx;
			this.y += this.dy;
			
			//intrectvity
			if (mouse.x - this.x < 50 && mouse.x - this.x > - 50 && mouse.y - this.y < 50 && mouse.y - this.y > - 50){
				if (this.radius < maxradius ){
				this.radius += 1;
			}}
			
			else if(this.radius > this.minradius){
				this.radius -= 1;
			}

			this.draw();
		}
		
	}
	  
	  var circleArray = [];

	function init(){
		
		circleArray = [];
			
			for (var i =0; i<200; i++ ){
				var x = Math.random()*(innerWidth - radius*2) + radius;
				var y = Math.random()*(innerHeight - radius*2) + radius;
				var dx = (Math.random() - 0.5)*5;
				var dy = (Math.random() - 0.5)*5;
				var radius = Math.random()*8+3;
				
				var number = Math.floor(Math.random()*20)
				var color = "abc";
				
				switch(number){
					case 0:
					color = "#000";
					break;
					case 1:
					color = "#ff0066";
					break;
					case 2:
					color = "#7acf3c";
					break;
					case 3:
					color = "#f26d7d";
					break;
					case 4:
					color = "#c3c5af";
					break;
					case 5:
					color = "#fff200";
					break;
					case 6:
					color = "#39b54a";
					break;
					case 7:
					color = "#00bff3";
					break;
					case 8:
					color = "#00a99d";
					break;
					case 9:
					color = "#a186be";
					break;
					case 10:
					color = "#cedf1f";
					break;
					case 11:
					color = "#1fdf63";
					break;
					case 12:
					color = "#dddf1f";
					break;
					case 13:
					color = "#df7a1f";
					break;
					case 14:
					color = "#1f9edf";
					break;
					case 15:
					color = "#b41fdf";
					break;
					case 16:
					color = "#6cc1d0";
					break;
					case 17:
					color = "#a69965";
					break;
					case 18:
					color = "#627c82";
					break;
					case 19:
					color = "#c0ff00";
					break;
					
				}
				
				circleArray.push(new Circle(x,y,dx,dy,radius,color));
			}
		}
	
	

	function animate(){
		requestAnimationFrame(animate); 
		c.clearRect(0, 0, innerWidth, innerHeight);
		
		for (var i =0; i<circleArray.length; i++ ){ 
		circleArray[i].update();
		
		}
		
		
	}
	init();
	animate();










function work(id){
	var main_img = document.getElementById("main_img");
	var photos = document.getElementById("photos");
	var photo_cred = document.getElementById("photo_cred");
	var explanation = document.getElementById("explanation")
	
	if(id == "box1"){
		var img = new Image();
		img.src = "images/ADPD/main.jpg"
		img.id = "img";
		main_img.appendChild(img);

		var side1 = new Image();
		side1.src = "images/ADPD/projection_1.jpg";
		side1.id = "side1";
		side1.className = "side";
		photos.appendChild(side1);

		var side2 = new Image();
		side2.src = "images/ADPD/projection_2.jpg";
	 	side2.className = "side";
	 	side2.id ="side2";
		photos.appendChild(side2);

		var side3 = new Image();
		side3.src = "images/ADPD/projection_3.jpg";
		side3.className = "side";
	 	side3.id ="side3";
		photos.appendChild(side3);

		var side4 = new Image();
		side4.src = "images/ADPD/sub1.jpg";
		side4.className = "side";
	 	side4.id ="side4";
		photos.appendChild(side4);
		
		var side5 = new Image();
		side5.src = "images/ADPD/plan.png";
		side5.className = "side";
	 	side5.id ="side5";
		photos.appendChild(side5);

		var side6 = new Image();
		side6.src = "images/ADPD/sub2.png";
		side6.className = "side";
		side6.id ="side6";
		photos.appendChild(side6);		

		photo_cred.innerHTML = "<br><br><br>Exhibition at Kirland Gallery at Harvard GSD";
		
		$(document).ready(function(){
			$("#content").on("click",".side",function(e){
				if(this.id == "side1"){photo_cred.innerHTML = "<br><br><br>Projection shot before user interaction";}
				else if(this.id == "side2"){photo_cred.innerHTML = "<br><br><br>Projection shot during user interaction";}
				else if(this.id == "side3"){photo_cred.innerHTML = "<br><br><br>Projection shot after user interaction";}
				else if(this.id == "side4"){photo_cred.innerHTML = "<br><br><br>Site map";}
				else if(this.id == "side5"){photo_cred.innerHTML = "<br><br><br>Plan view of installation";}
				else{photo_cred.innerHTML = "<br><br><br>Statue of Charles Sumner";}
				var thmb = this;
				var src = this.src;
				$("#img").fadeOut(400, function(){
					thmb.src = this.src;
					$(this).fadeIn(400)[0].src = src;
				});
				e.preventDefault();
			});
		});

		var explanation = document.getElementById("explanation")
		explanation.innerHTML += "<br>The Fence <br><br>An interactive installation on the site where the statue of Charles Sumner by Anne Whitney is placed. We place his words at the very center of our stage to address the public on the issue of equality and freedom. Through the interaction of public and his words, we intend to exhibit the timeless value of his words and furthermore his values.<br><br>* In collaboration with Young Joo Song and Allyssa Williams<br><br>** User interaction interface code written by HyoJeong Choi";
	}else if(id == "box2"){	

		var img = new Image();
		img.src = "images/exp1.png"
		img.id = "img";
		img.style.height = 80+"%";
		main_img.appendChild(img);

		var side1 = new Image();
		side1.src = "images/exp2.png";
		side1.id = "side1";
		side1.style.width=100+"%";
		side1.className = "side";
		photos.appendChild(side1);

		photo_cred.innerHTML = "<br><br><br>Before and after Gaussian blur is applied.";

		$(".side").click(function(){
			if(this.id == "side1"){
				photo_cred.innerHTML = "No input sound(left) versus input sound looking at different points(middle and right).";
			}
			var thmb = this;
			var src = this.src;
			$("#img").fadeOut(400, function(){
				thmb.src = this.src;

				$(this).fadeIn(400)[0].src = src;
		
			});
		});

		explanation.innerHTML += "<br>Noise and Attention<br><br>This was a design research project that attempted to explore passive user interaction with video, and how noise created by user interaction affects his/her attention. Here passive interaction refers to unintentional input from the user such as ambient sound or eye movement. The user is not making an active decision to influence what he/she sees but rather responding to what he/she is exposed to. Based on the input data the video is manipulated to disrupt the video to interrupt the user attention.<br><br>Detailed description and source code can be found ";
		
		var link = document.createElement("A");
		var t = document.createTextNode("here.");
		link.setAttribute("href", "images/paper.pdf");
		link.appendChild(t);
		explanation.appendChild(link);
	}else if(id == "box3"){
		main_img.innerHTML = "COMING SOON";
	}else if(id == "box0"){
		main_img.innerHTML = "COMING SOON";
	}else if(id == "box00"){
		main_img.innerHTML = "COMING SOON";
	}

}
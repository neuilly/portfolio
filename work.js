function work(id){
	if(id == "box1"){
		var content  = document.getElementById("content");

		var main_img = document.getElementById("main_img");
		var img = new Image();
		img.src = "images/ADPD/main.jpg"
		img.id = "img";
		main_img.appendChild(img);

		var side_imgs = document.getElementById("side_imgs");
		var side1 = new Image();
		side1.src = "images/ADPD/projection_1.jpg";
		side1.className = "side";
		side_imgs.appendChild(side1);

		var side2 = new Image();
		side2.src = "images/ADPD/projection_2.jpg";
	 	side2.className = "side";
		side_imgs.appendChild(side2);

		var side3 = new Image();
		side3.src = "images/ADPD/projection_3.jpg";
		side3.className = "side";
		side_imgs.appendChild(side3);

		var side4 = new Image();
		side4.src = "images/ADPD/sub1.jpg";
		side4.className = "side";
		side_imgs.appendChild(side4);
		
		var side5 = new Image();
		side5.src = "images/ADPD/plan.png";
		side5.className = "side";
		side_imgs.appendChild(side5);

		var side6 = new Image();
		side6.src = "images/ADPD/sub2.png";
		side6.className = "side";
		side_imgs.appendChild(side6);		

		$(".side").click(function(){
			var thmb = this;
			var src = this.src;
			$("#img").fadeOut(400, function(){
				thmb.src = this.src;

				$(this).fadeIn(400)[0].src = src;
			});
		});

		var explanation = document.getElementById("explanation")
		explanation.innerHTML += "<br>The Fence <br><br>An interactive installation on the site where the statue of Charles Sumner by Anne Whitney is placed. We place his words at the very center of our stage to address the public on the issue of equality and freedom. Through the interaction of public and his words, we intend to exhibit the timeless value of his words and furthermore his values.<br><br>* In collaboration with Young Joo Song and Allyssa Williams<br><br>";
	}
}
function work(){
	var showbox = document.getElementById("showbox");

	var box1 = document.createElement("div");
	box1.className = "box";
	box1.id = "box1";
	box1.style.align = "center";
	showbox.appendChild(box1);
	var sample1 = new Image();
	sample1.src = "images/ADPD_clip.png";
	sample1.className = "samples";
	sample1.style.height = 200+"px";
	box1.style.height = 225+"px";
	box1.appendChild(sample1);
	var caption1 = document.createElement("div");
	caption1.innerHTML = "THE FENCE";
	box1.appendChild(caption1);


	var box2 = document.createElement("div");
	box2.className = "box";
	box2.id = "box2";
	showbox.appendChild(box2);
	var sample2 = new Image();
	sample2.src = "images/blur.jpg";
	sample2.className = "samples";
	sample2.style.height = 250+"px";
	box2.style.height = 275+"px";
	box2.appendChild(sample2);
	var caption2 = document.createElement("div");
	caption2.innerHTML = "Noise";
	box2.appendChild(caption2);


	var box3 = document.createElement("div");
	box3.className = "box";
	box3.id= "box3";
	showbox.appendChild(box3);
	var sample3 = new Image();
	sample3.src = "images/PEP.png";
	sample3.className = "samples";
	sample3.style.height = 350+"px";
	box3.style.height = 375+"px";
	box3.appendChild(sample3);
	var caption3 = document.createElement("div");
	caption3.innerHTML = "Problem Solving";
	box3.appendChild(caption3);

	document.getElementById("box1").onclick = function(){console.log("hello");};

	document.getElementById("box2").onclick = function(){console.log("hello");};
	
	document.getElementById("box3").onclick = function(){console.log("hello");};
}
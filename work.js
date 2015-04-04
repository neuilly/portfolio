function work(){
	var showbox = document.getElementById("showbox");

	var box0 = document.createElement("div");
	box0.className = "box";
	box0.id = "box1";
	box0.style.align = "center";
	showbox.appendChild(box0);
	var sample0 = new Image();
	sample0.src = "";
	sample0.className = "samples";
	sample0.style.height = 30+"%";
	box0.style.width = 30+"%";
	box0.appendChild(sample0);
	var caption0 = document.createElement("div");
	caption0.innerHTML = "Placeholder";
	box0.appendChild(caption0);


	var box00 = document.createElement("div");
	box00.className = "box";
	box00.id = "box1";
	box00.style.align = "center";
	showbox.appendChild(box00);
	var sample00 = new Image();
	sample00.src = "";
	sample00.className = "samples";
	sample00.style.height = 30+"%";
	box00.style.width = 30+"%";
	box00.style.left = 40+"%";
	box00.appendChild(sample00);
	var caption00 = document.createElement("div");
	caption00.innerHTML = "Placeholder";
	box00.appendChild(caption00);

	var box1 = document.createElement("div");
	box1.className = "box";
	box1.id = "box1";
	box1.style.align = "center";
	showbox.appendChild(box1);
	var sample1 = new Image();
	sample1.src = "images/ADPD_clip.png";
	sample1.className = "samples";
	sample1.style.height = 20+"%";
	box1.style.width = 35+"%";
	box1.style.top = 50+"%";
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
	sample2.style.height = 25+"%";
	box2.style.width = 24+"%";
	box2.style.top = 50+"%";
	box2.style.left = 47+"%";
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
	sample3.style.height = 35+"%";
	box3.style.width = 26+"%";
	box3.style.left = 75+"%";
	box3.appendChild(sample3);
	var caption3 = document.createElement("div");
	caption3.innerHTML = "Problem Solving";
	box3.appendChild(caption3);

	document.getElementById("box1").onclick = function(){console.log("hello");};

	document.getElementById("box2").onclick = function(){console.log("hello");};
	
	document.getElementById("box3").onclick = function(){console.log("hello");};
}
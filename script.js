let canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");

	ctx.rect(0, 0, canvas.width, canvas.height);
	let grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
	grd.addColorStop(0, "#203AC0");
	grd.addColorStop(0.5, "#1E0073");
	grd.addColorStop(1, "#4C0073");
	ctx.fillStyle = grd;
	ctx.fill();

	ctx.strokeStyle = "#00ff00";
	ctx.lineWidth = "7";


	ctx.beginPath();
	ctx.arc(150, 200, 70, 70*Math.PI/180, 285*Math.PI/180);
	ctx.lineTo(168,132);
	ctx.bezierCurveTo(220, 150, 20, 200, 150, 140);
	ctx.stroke();
	ctx.beginPath();
	ctx.lineTo(150,300);
	ctx.bezierCurveTo(130, 180, 280, 220, 173.5, 266);
	ctx.stroke();
			

	ctx.beginPath();
	ctx.moveTo(290,270);
	ctx.bezierCurveTo(200, 330, 250, 170, 285, 250);
	ctx.bezierCurveTo(220, 310, 270, 200, 270, 250);
	ctx.moveTo(284,270);
	ctx.bezierCurveTo(300, 283, 320, 150, 325, 130);
	ctx.moveTo(323,130);
	ctx.lineTo(425,100);
	ctx.moveTo(355,275);
	ctx.lineTo(385,110);
	ctx.moveTo(305,230);
	ctx.bezierCurveTo(385, 140, 300,300, 400, 190);
	ctx.stroke();


	ctx.beginPath();
	ctx.moveTo(530,150);
	ctx.bezierCurveTo(570, 0, 390, 250, 490, 160);
	ctx.moveTo(570,150);
	ctx.bezierCurveTo(550, 240, 470, 360, 530, 150);
	ctx.moveTo(640,110);
	ctx.bezierCurveTo(500,450, 623, 0, 568, 156);
	ctx.moveTo(600,260);
	ctx.bezierCurveTo(610,300, 655, 35, 638, 120);
	ctx.stroke();


	ctx.beginPath();
	ctx.moveTo(733,260);
	ctx.bezierCurveTo(620, 330, 700, 150, 725, 235);
	ctx.bezierCurveTo(730, 260, 660, 285, 700, 230);
	ctx.moveTo(730,262);
	ctx.bezierCurveTo(750, 250, 750, 150, 758, 120);
	ctx.moveTo(860,90);
	ctx.lineTo(755,120);
	ctx.moveTo(798,265);
	ctx.lineTo(818,105);
	ctx.moveTo(840,170);
	ctx.bezierCurveTo(740, 280, 820, 115, 745, 220);
	ctx.stroke();
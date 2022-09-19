
function Rei(ctx){
	this.x = 20;
	this.y = 250;
	this.largura = 140;
	this.altura = 180;
	
	pos2 = [ "imagens/rei/run1.png", "imagens/rei/run2.png", 
			 "imagens/rei/run3.png", "imagens/rei/run4.png",
			 "imagens/rei/run5.png", "imagens/rei/run6.png",
			 "imagens/rei/run7.png", "imagens/rei/run8.png",
			 "imagens/rei/Jump2.png", "imagens/rei/Jump3.png",
			 "imagens/rei/Jump4.png", "imagens/rei/Jump5.png",
			 "imagens/rei/Jump6.png", "imagens/rei/Jump7.png",
			 "imagens/rei/Jump8.png", "imagens/rei/Jump9.png",
			 "imagens/rei/Jump10.png", "imagens/rei/Jump11.png",
			 "imagens/rei/Jump12.png"];

	posImg2 = 0;		
}

Rei.prototype={

	correr: function(){
		if(posImg2 == pos2.length - 2){
			img2.src = pos2[posImg2];
			posImg2 = 0;
		}
		posImg2++;
	}
	,
	desenhar: function(){ 
		img2 = new Image();
		img2.src = pos2[posImg2]; // 
		ctx.drawImage(img2, this.x, this.y, this.largura, this.altura);
	}

}
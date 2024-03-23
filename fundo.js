function Fundo(){
	this.x = 0;
	this.y = 0;
	this.largura = 0;
	this.altura = 0;
	this.velocidade = 8; 
}
Fundo.prototype={

	atualiza:function(){
		this.x -= this.velocidade;
	}
	,
	desenha: function(){
	   var img = new Image();
		   img.src = "fundo7.jpg";
		   ctx.drawImage(img, this.x, this.y, this.largura, this.altura); 
	}
}
function Sprite(bola) {
	this.x = 0;
	this.y = 0;
	this.bola = bola;
	this.largura = 0;
	this.altura = 0;
	this.size = 0;
	this.mensagem = "";
}
Sprite.prototype = {
	desenhaBotaoComecar: function () {
		var img = new Image();
		img.src = "tube1.png";
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura);
	}
	,
	desenhaLetra: function () {
		ctx.font = "35 Arial";
		ctx.fillStyle = "white";
		ctx.fillText(this.mensagem, this.x, this.y);
	}
	,
	desenhaPontuacao: function () {

		if (this.bola.bolaSaltada > 9 && this.bola.bolaSaltada < 100)
			this.x = 670;
		else if (this.bola.bolaSaltada > 99 && this.bola.bolaSaltada < 1000)
			this.x = 660;

		ctx.font = "35px Arial";
		ctx.fillStyle = "white";
		ctx.fillText(this.bola.bolaSaltada, this.x, this.y);
	}
	,
	desenhaTotal: function () {
		ctx.font = "35px Arial";
		ctx.fillStyle = "white";
		ctx.fillText(this.bola.bolaSaltada, this.x, this.y);
	}
}
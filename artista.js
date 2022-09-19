
function Artista() {
	this.largura = 140;
	this.altura = 180;
	this.posX = 140;
	this.posY = 50;
	this.velocidade = 10; //15
	this.gravidade = 0.001;
	this.salto = 200; // 250
	this.chao = 45;

	this.pos = ["imagens/artista/run1.png", "imagens/artista/run2.png", "imagens/artista/run3.png", "imagens/artista/run4.png",
		"imagens/artista/run5.png", "imagens/artista/run6.png", "imagens/artista/run7.png", "imagens/artista/run8.png",
		"imagens/artista/run9.png", "imagens/artista/run10.png", "imagens/artista/run11.png", "imagens/artista/run12.png",
		"imagens/artista/run13.png", "imagens/artista/run14.png", "imagens/artista/run15"];
	this.posImg = 0;
	salto = true;
	img1 = new Image();
}

Artista.prototype = {

	correr: function () {
		if (this.posImg == this.pos.length - 2) {
			img1.src = this.pos[this.posImg];
			this.posImg = 0;
		}
		this.posImg++;
	}
	,
	atualizar: function () {

		if (this.posY >= (480 - this.chao) - this.altura) {
			this.posY = (480 - this.chao) - this.altura;
			salto = true;
		}
		else {
			this.velocidade += this.gravidade;
			this.posY += this.velocidade;
		}
	}
	,
	saltar: function () {
		if (salto == true)
			this.posY += -this.salto;
		salto = false;
	}
	,
	desenhar: function () {
		img1.src = this.pos[this.posImg]; // this.pos[]
		ctx.drawImage(img1, this.posX, this.posY, this.largura, this.altura);
	}
}

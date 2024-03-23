function Artista(){
	this.largura = 140;
	this.altura = 180;
	this.posX = 180; 
	this.posY = 50;
	this.velocidade = 10; 
	this.gravidade = 0.001; 
	this.salto = 200; 
	this.chao = 45;

	this.pos = ["imagens/run1.png","imagens/run1.png","imagens/run2.png","imagens/run2.png",
	"imagens/run3.png", "imagens/run3.png","imagens/run4.png","imagens/run4.png","imagens/run5.png",
	"imagens/run5.png","imagens/run6.png","imagens/run6.png","imagens/run7.png","imagens/run7.png",
	"imagens/run8.png","imagens/run8.png","imagens/run9.png","imagens/run9.png","imagens/run10.png",
	"imagens/run10.png","imagens/run11.png","imagens/run11.png","imagens/run12.png", "imagens/run12.png",
	"imagens/run13.png","imagens/run13.png","imagens/run14.png","imagens/run14.png","imagens/run15.png",
	"imagens/run15.png"];
		
	this.posImg = 0;
	salto = true;
	img1 = new Image();
}
Artista.prototype={

	correr: function(){
		if(this.posImg == this.pos.length - 1){
			img1.src = this.pos[this.posImg];
			this.posImg = 0;
		}
		this.posImg++;
	}
	,
	atualizar: function(){

		if(this.posY >= (480 - this.chao) -  this.altura){
			this.posY = (480 - this.chao) -  this.altura;
			salto = true;
		}
		else{
			this.velocidade += this.gravidade; 
			this.posY += this.velocidade;
		}
	}
	,
	saltar: function(){
		if(salto == true)
		this.posY += -this.salto;
		salto = false;
	}
	,
	desenhar: function(){
		img1.src = this.pos[this.posImg]; // this.pos[]
		ctx.drawImage(img1, this.posX, this.posY, this.largura, this.altura);
	}
}
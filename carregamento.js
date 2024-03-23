function Carregamento(artista,bola,fundoCima,fundoBaixo, colisao, rei, circulo, mgsPerdeu, totalPontos, totPontos, pontuacao, botaoComeca){
	this.artista = artista;
	this.bola = bola;
	this.fundoCima = fundoCima;
	this.fundoBaixo = fundoBaixo;
	this.colisao = colisao;
	this.rei = rei;
	this.circulo = circulo;
	this.mgsPerdeu = mgsPerdeu;
	this.totalPontos = totalPontos;
	this.totPontos = totPontos;
	this.pontuacao = pontuacao;
	this.botaoComeca = botaoComeca;
}
Carregamento.prototype={

	carrega: function(){

		 fInicial = new Image();
	     fInicial.src = "fundo7.jpg";

		 fInicial.onload=function(){
			ctx.drawImage(fInicial, 0, 0, 800, 480);
		 };

	     btnComeca = new Image();
		 btnComeca.src = "tube1.png";
		 btnComeca.onload = function(){
		 ctx.drawImage(btnComeca, 320, 138, 128, 128);
		}
	}
	,
	configura: function(){
		this.bola.posX = 900; 
		this.bola.posY = 396;

		this.fundoCima.largura = 800;
		this.fundoCima.altura = 480;

		this.fundoBaixo.x = 800;
		this.fundoBaixo.largura = 800;
		this.fundoBaixo.altura = 480;

		this.circulo.posX = 690;
		this.circulo.posY = 80;
		this.circulo.raio = 50;
		this.circulo.numCor = 2;

		//Mostra a mensagem dizendo que perdeu
		this.mgsPerdeu.x = 360;
		this.mgsPerdeu.y = 177;
		this.mgsPerdeu.size = 20;
		this.mgsPerdeu.mensagem = "PERDEU";

		 // Mostra a mensagem dizendo: Total de pontuação
		this.totalPontos.x = 280;
		this.totalPontos.y = 215;
		this.totalPontos.size = 15;
		this.totalPontos.mensagem = "Total de Pontuação:"

		// A pontuação do placar no final do jogo
		this.totPontos.x = 590;
		this.totPontos.y = 217;

	
		this.pontuacao.x = 680;
		this.pontuacao.y = 90;

		this.botaoComeca.x = 320;
		this.botaoComeca.y = 138;
		this.botaoComeca.largura = 128;
		this.botaoComeca.altura = 128;

	}
}
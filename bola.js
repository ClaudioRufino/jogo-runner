function Bola() {
	this.posX = 0;
	this.raio = 20;
	this.chao = 0;
	this.posY = 0;
	this.numCor = 0;
	this.velocidade = 13; //15
	this.bolaSaltada = 0;

	this.cores = ["#19b9ed", "#ed1937",
		"#1c5557", "#e85636",
		"#a43fde", "#565353",
		"#7460d9", "#f20cc9",
		"#65f5e3", "#000000"];
}
Bola.prototype = {
	atualizar: function () {
		if (this.posX < 0) {
			this.posX = 800;
			this.bolaSaltada++;
			this.numCor++;
		}

		if (this.bolaSaltada > 20 && this.bolaSaltada < 40) {
			this.velocidade = 17;
			this.raio = 25;
		}
		if (this.bolaSaltada >= 40 && this.bolaSaltada < 100) {
			this.velocidade = 19;
			this.raio = 30;
		}
		if (this.bolaSaltada >= 150 && this.velocidade) {
			this.velocidade = 21;
			this.raio = 32;
		}

		this.posX -= this.velocidade;

		if (this.numCor > this.cores.length - 1)
			this.numCor = 0;
	}
	,
	desenhar: function () {
		ctx.beginPath();
		ctx.fillStyle = this.cores[this.numCor];
		ctx.arc(this.posX, this.posY, this.raio, 2 * Math.PI, 0, true);
		ctx.fill();
	}
}	
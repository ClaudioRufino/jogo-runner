function Colisao(artista, bola) {
	this.artista = artista;
	this.bola = bola;
}

Colisao.prototype = {
	ocorreu: function () {
		if ((this.artista.largura > this.bola.posX - 50)
			&& (this.artista.posX < this.bola.posX + 10) // this.bola.raio
			&& (this.artista.posY + this.artista.altura > this.bola.posY)
			&& (this.artista.posY < this.bola.posY + this.bola.raio)) {
			return true;
		}
	}

}
function Som(){

}
Som.prototype={
	fundo: function(){
		musicaFundo = new Audio();
		musicaFundo.src = "Sounds/tomfox.mp3";
		musicaFundo.load();
		musicaFundo.volume = 1;
		musicaFundo.loop = true;
		musicaFundo.play();
	}
	,
	salto: function(){
		musicaSalto = new Audio();
		musicaSalto.src = "Sounds/Blop.mp3";
		musicaSalto.load();
		musicaSalto.volume = 0.4;
		musicaSalto.play();
	}
}
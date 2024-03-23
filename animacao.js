function Animacao(){
	estado = 0; 
	/* A variável estado vai ditar se o animação, comece,
	 pause ou termine de acordo com os números (1, 2,3 respectivamente)*/

}
Animacao.prototype ={

	comeca: function(){

		if(estado == 0){
			alert("Rodando");

			limpa();

			atualiza();

			desenha();


			var animacao = this;
			requestAnimationFrame(function(){
				animacao.comeca();
			});
		}
		
		else return;
	},

	pausa: function(){
		if(estado == 1){
			alert("pausei");
		}
	}
	, 
	termina: function(){
		estado = 2;
	}
}

function limpa(){
	alert("Limpando o canvas");
}

function atualiza(){

	var animacao = new Animacao();
	 animacao.termina();
}

function desenha(){
	alert("desenhando no canvas");
}


	
	




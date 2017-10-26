
let campo 		   = $(".campo-digitacao");
let tempoDigitacao = $("#tempo-digitacao");
let botaoReiniciar = $("#botao-reiniciar");
let frase 		   = $(".frase").text();
let tempoInicial   = tempoDigitacao.text();

$(function() {
	inicializaTamanhoFrase();
	inicializaContadores();
	inicializaMarcadores();
	inicializaCronometro();
	inicializaPlacar();
	botaoReiniciar.click(reiniciaJogo);
});

function reiniciaJogo() {
		campo.attr("disabled", false);
		campo.val("");
		campo.toggleClass("campo-desativado");
		campo.removeClass("borda-verde");
		campo.removeClass("borda-vermelha");
		$("#contador-caracteres").text("0");
		$("#contador-palavras").text("0");
		$("#tempo-digitacao").text(tempoInicial);
		inicializaCronometro();
}

function inicializaTamanhoFrase() {	
	let numPalavras  = frase.split(" ").length;
	let tamanhoFrase = $("#tamanho-frase").text(numPalavras);
}

function inicializaContadores() {
	campo.on("input", function () {
		let conteudo = campo.val();
		$("#contador-caracteres").text(conteudo.length);
		$("#contador-palavras").text(conteudo.split(/\S+/).length - 1);
	});
}

function inicializaMarcadores() {
	campo.on("input", function () {
		let digitado   = campo.val();
		if (frase.startsWith(digitado)) {
			campo.addClass("borda-verde");
			campo.removeClass("borda-vermelha");
	    } else  {
	    	campo.addClass("borda-vermelha");
			campo.removeClass("borda-verde");
		}
	});
}

function inicializaCronometro() {
	let tempoRestante  = tempoDigitacao.text();
	campo.one("focus", function () {
		botaoReiniciar.attr("disabled", true);
		var cronometroId = setInterval(function () {
			tempoRestante--;
			tempoDigitacao.text(tempoRestante);
			if (tempoRestante < 1) {
				clearInterval(cronometroId);
				finalizaJogo();
			}
		}, 1000);
	});
}

function finalizaJogo() {
	campo.attr("disabled", true);
	campo.toggleClass("campo-desativado");
	botaoReiniciar.attr("disabled", false);
	inserePlacar();
}







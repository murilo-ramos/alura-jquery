/*let frase = $(".frase").text();
let numPalavras = frase.split(" ").length;

let tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);*/

let campo 		   = $(".campo-digitacao");
let tempoDigitacao = $("#tempo-digitacao");
let botaoReiniciar = $("#botao-reiniciar");
let tempoInicial   = tempoDigitacao.text();

$(function() {
	inicializaContadores();
	inicializaCronometro();
	botaoReiniciar.click(reiniciaJogo);
});

function reiniciaJogo() {
		campo.attr("disabled", false);
		campo.val("");
		$("#contador-caracteres").text("0");
		$("#contador-palavras").text("0");
		$("#tempo-digitacao").text(tempoInicial);
		inicializaCronometro();
}

function inicializaContadores() {
	campo.on("input", function () {
		let conteudo = campo.val();
		$("#contador-caracteres").text(conteudo.length);
		$("#contador-palavras").text(conteudo.split(/\S+/).length - 1);
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
				campo.attr("disabled", true);
				botaoReiniciar.attr("disabled", false);
				clearInterval(cronometroId);
			}
		}, 1000);
	});
}





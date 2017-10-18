/*let frase = $(".frase").text();
let numPalavras = frase.split(" ").length;

let tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);*/

let campo = $(".campo-digitacao");

campo.on("input", function () {
	let conteudo = campo.val();
	$("#contador-caracteres").text(conteudo.length);
	$("#contador-palavras").text(conteudo.split(/\S+/).length - 1);
});

let tempoDigitacao = $("#tempo-digitacao");
let tempoRestante  = tempoDigitacao.text();
campo.one("focus", function () {
	var cronometroId = setInterval(function () {
		tempoRestante--;
		tempoDigitacao.text(tempoRestante);
		if (tempoRestante < 1) {
			campo.attr("disabled", true);
			clearInterval(cronometroId);
		}
	}, 1000);
});
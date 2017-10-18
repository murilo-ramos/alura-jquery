let campo = $(".campo-digitacao");

campo.on("input", function () {
	let conteudo = campo.val();
	$("#contador-caracteres").text(conteudo.length);
	$("#contador-palavras").text(conteudo.split(/\S+/).length - 1);
});

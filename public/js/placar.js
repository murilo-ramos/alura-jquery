function inicializaPlacar() {
	var corpoTabela = $(".placar").find("tbody");
	var links = corpoTabela.find("a");
	links.each(function () {
		$(this).click(removeLinha);
	});
}

function inserePlacar() {
	var corpoTabela = $(".placar").find("tbody");
	var usuario = "Nome do Usuário";
	var numPalavras = $("#contador-palavras").text();

	var linha = novaLinhaPlacar(usuario, numPalavras);
	linha.find(".botao-remover").click(removeLinha);

	corpoTabela.append(linha);
}

function novaLinhaPlacar(usuario, palavras) {
	var linha = $("<tr>");
	
	var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");
	var link = ($("<a>").attr("href", "#").addClass("botao-remover"));
	link.append(icone);

	linha.append($("<td>").text(usuario));
	linha.append($("<td>").text(palavras));
	linha.append($("<td>").append(link));

	return linha;
}

function removeLinha(event) {
	event.preventDefault();
	$(this).parent().parent().remove();
}

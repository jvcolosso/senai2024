function adicionarAoCarrinho(produto, preco) {
    var listaCarrinho = document.getElementById('lista-carrinho');
    var totalCarrinho = document.getElementById('total-carrinho');

    var novoItem = document.createElement('li');
    novoItem.textContent = produto + ' - R$ ' + preco.toFixed(2);

    listaCarrinho.appendChild(novoItem);

    var totalAtual = parseFloat(totalCarrinho.textContent);
    totalAtual += preco;
    totalCarrinho.textContent = totalAtual.toFixed(2);
}

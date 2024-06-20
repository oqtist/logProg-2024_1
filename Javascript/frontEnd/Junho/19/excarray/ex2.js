let produtos = ['arroz', 'feijão', 'leite', 'ovos', 'suco', 'laranjas', 'bananas', 'espinafre']


function buscarProduto() {

    const produtoDigitado = document.getElementById('id-produtos').value
    const lista = document.getElementById('lista-encontrada')

    if (produtos.includes(produtoDigitado)) {
        let filter = produtos.filter(function (produto) {
            return produto == produtoDigitado
        }) 
        let posicao = produtos.findIndex(function (produto) {
            return produto == produtoDigitado
        })
        lista.innerHTML = (`${filter} encontrado na posição ${posicao + 1} do catálogo.`)
    } else {
        lista.innerHTML = ('Produto não encontrado no catálogo.')
    }
}
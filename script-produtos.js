const botaoProdutos = document.getElementById('botaoProduto')

botaoProdutos.addEventListener('click', e => {
  e.preventDefault()
  /*Impede que a página seja recarregada*/
  let id = document.getElementById('id').value
  let descricao = document.getElementById('description').value
  let preco = document.getElementById('price').value
  let quantidade = document.getElementById('qtds').value

  let dadosCadastro = {
    id: id,
    description: descricao,
    price: preco,
    qtds: quantidade
  }

  let cadProdutos = localStorage.getItem('dadosProdutosCad')

  if (cadProdutos == null) {
    cadProdutos = []
  } else {
    cadProdutos = JSON.parse(cadProdutos)
  }
  cadProdutos.push(dadosCadastro)
  localStorage.setItem('dadosProdutosCad', JSON.stringify(cadProdutos))
  alert('O cadastro do usuário ' + descricao + ' foi realizado com sucesso!')
  location.reload()
})
function listarCadastrosProdutos() {
  let cadastros = localStorage.getItem('dadosProdutosCad')

  if (cadastros == null) {
    var element = document.getElementById('tabelaProdutos')
    element.innerHTML = 'Ainda não há cadastros realizados para consultar'
  } else {
    cadastros = JSON.parse(cadastros)

    let element = document.getElementById('tabelaProdutos')
    // element.innerHTML = '<b>Hello World!</b>'
    let linhasTabela =
      '<table class="table table-hover" >  <tr> <td>Código</td> <td>Descrição</td>  <td>Preço</td>   <td>Quantidade</td>  </tr> '

    cadastros.forEach(cadastro => {
      linhasTabela =
        linhasTabela +
        '<tr>' +
        `<td>${cadastro.id}</td>  
      <td>${cadastro.description}</td>  
      <td>${cadastro.price}</td>  
      <td>${cadastro.qtds}</td> </tr> `
    })
    element.innerHTML = linhasTabela
    // cadastros.forEach(cadastro => {
    //   document.write('<ul>')
    //   document.write('<li>Código de Registro: ' + cadastro.register + '</li>')
    //   document.write('<li>Nome do Pet: ' + cadastro.name + '</li>')
    //   document.write('<li>Tipo do Pet: ' + cadastro.type + '</li>')
    //   document.write('<li>Idade do Pet: ' + cadastro.age + '</li>')
    //   document.write('</ul><p></p>')
    // })
  }
}

function limparStorageProdutos() {
  localStorage.removeItem('dadosProdutosCad')
  window.location = window.location
}

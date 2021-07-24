const botao = document.getElementById('botao')

//form.addEventListener('submit', e => {
botao.addEventListener('click', e => {
  e.preventDefault() /*Impede que a página seja recarregada*/
  let registro = document.getElementById('registro').value
  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value
  let endereco = document.getElementById('endereco').value

  let dadosCadastro = {
    id: registro,
    name: nome,
    email: email,
    adress: endereco
  }
  let cadPessoas = localStorage.getItem('dadosPessoasCad')

  if (cadPessoas == null) {
    cadPessoas = []
  } else {
    cadPessoas = JSON.parse(cadPessoas)
  }
  cadPessoas.push(dadosCadastro)
  localStorage.setItem('dadosPessoasCad', JSON.stringify(cadPessoas))
  alert('O cadastro do usuário ' + nome + ' foi realizado com sucesso!')
  location.reload()
})

function listarCadastros() {
  let cadastros = localStorage.getItem('dadosPessoasCad')

  if (cadastros == null) {
    let element = document.getElementById('tabela')
    element.innerHTML =
      '<h3>Ainda não há cadastros realizados para consultar.</h3>'
  } else {
    cadastros = JSON.parse(cadastros)

    let element = document.getElementById('tabela')
    element.innerHTML = '<b>Hello World!</b>'
    let linhasTabela =
      '<table class="table table-hover" >  <tr> <td>Código</td> <td>Nome</td>  <td>Email</td>   <td>Endereco</td>  </tr> '

    cadastros.forEach(cadastro => {
      linhasTabela =
        linhasTabela +
        '<tr>' +
        `<td>${cadastro.id}</td>  
      <td>${cadastro.name}</td>  
      <td>${cadastro.email}</td>  
      <td>${cadastro.adress}</td> </tr> `
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

function limparStoragePessoas() {
  localStorage.removeItem('dadosPessoasCad')
  window.location = window.location
}

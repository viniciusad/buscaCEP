const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('buscarCep');

//=================FORMATA CEP=================//
function formataCEP(cep) {
    const elementoAlvo = cep
    const cepAtual = cep.value   
    
    let cepAtualizado;
    
    cepAtualizado = cepAtual.replace(/(\d{5})(\d{3})/, 
    function( regex, argumento1, argumento2 ) {
        return argumento1 + '-' + argumento2;
    })  
    elementoAlvo.value = cepAtualizado; 
}

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep)
}


function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(r => r.json())
    .then(dadosCep => {
      if(!dadosCep.cep) {
        return alert('CEP não encontrado, verifique novamente!');
      }
        document.querySelector('[data-cep]').innerText = dadosCep.cep;
        document.querySelector('[data-log]').innerText = dadosCep.logradouro;
        document.querySelector('[data-bairro]').innerText = dadosCep.bairro;
        document.querySelector('[data-local]').innerText = dadosCep.localidade;
        document.querySelector('[data-uf]').innerText = dadosCep.uf;
        document.querySelector('[data-ddd]').innerText = dadosCep.ddd;
    })
}


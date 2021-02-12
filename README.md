<p  align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/viniciusad/buscaCEP?style=for-the-badge">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/viniciusad/buscaCEP?style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/viniciusad/buscaCEP?style=for-the-badge">
  <img alt="GitHub" src="https://img.shields.io/github/license/viniciusad/buscaCEP?style=for-the-badge">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/viniciusad/buscaCEP?style=for-the-badge">
  <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/viniciusad/buscaCEP?style=for-the-badge">
</p>

## 💻 Busca CEP

Código javascript utiliza a API ViaCEP para localizar os dados.
<br>
<br>
<a href="https://viacep.com.br/">
  <img src="https://viacep.com.br/estatico/images/viacep.png.pagespeed.ce.I80LiA6qpr.png">
</a>
<br>
```javascript
function buscaCep(cep) {
 fetch(`https://viacep.com.br/ws/${cep}/json/`)
 .then(r => r.json())
 .then(dadosCep => {
   if(!dadosCep.cep) {
     document.getElementById('erro').innerHTML = "CEP não encontrado, verifique novamente";
   } else {
     document.getElementById('erro').innerHTML = ""
     document.querySelector('[data-cep]').innerHTML = dadosCep.cep;
     document.querySelector('[data-log]').innerHTML = dadosCep.logradouro;
     document.querySelector('[data-bairro]').innerHTML = dadosCep.bairro;
     document.querySelector('[data-local]').innerHTML = dadosCep.localidade;
     document.querySelector('[data-uf]').innerHTML = dadosCep.uf;
     document.querySelector('[data-ddd]').innerHTML = dadosCep.ddd;
     }
  })
 }
```

## 🔗 Responsivo e aceita apenas números
### https://viniciusad.com/p/buscacep/index.html
<br>
<img align="center" src="https://github.com/viniciusad/buscaCEP/raw/master/assets/BuscaCEP.gif" width="400px">

## 📧 Contato
[![Linkedin Badge](https://img.shields.io/badge/-Vinicius%20Silva-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/viniciusad/)](https://www.linkedin.com/in/viniciusad/)

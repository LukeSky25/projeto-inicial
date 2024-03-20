var botao = document.getElementById('botao');
var saida = document.getElementById('saida-de-dados');
var nome  = document.getElementById('nome');
var email  = document.getElementById('email');
var tel  = document.getElementById('tel');
var cep = document.getElementById('cep');
var logr = document.getElementById('logr');
var num = document.getElementById('num');
var compl = document.getElementById('compl');
var bairro = document.getElementById('bairro');
var cid = document.getElementById('cid');
var estd = document.getElementById('estd');


botao.addEventListener('click', function(e) {
    
    saida.innerText = `Nome: ${nome.value}  ` + `\nEmail: ${email.value}  ` + `\nTelefone: ${tel.value}  ` + `\nCEP: ${cep.value}  ` + `\nLogradouro: ${logr.value}  ` + 
    `\nNúmero: ${num.value}` + `\nComplemento: ${compl.value}  ` + `\nBairro: ${bairro.value}  ` + `\nCidade: ${cid.value}` +
    `\nEstado: ${estd.value}`;

});
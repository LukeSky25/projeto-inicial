var botao = document.getElementById('botao');
var nome  = document.getElementById('nome')

botao.addEventListener('click', function(e) {
    
    alert('Você Apertou o Botão ' + nome.value);
});
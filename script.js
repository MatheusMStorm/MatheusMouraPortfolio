var elementosProjeto = document.querySelectorAll('.projeto');

elementosProjeto.forEach(function(elemento) {
    elemento.addEventListener('click', function() {
        elemento.classList.toggle('ativo');
    });
});

const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const botoes = document.querySelector('.menu .botoes');

menuToggle.addEventListener('click', function() {
    botoes.classList.add('open');
});

menuClose.addEventListener('click', function() {
    botoes.classList.remove('open');
});
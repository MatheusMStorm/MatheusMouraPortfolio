var elementosProjeto = document.querySelectorAll('.projeto');

elementosProjeto.forEach(function(elemento) {
    elemento.addEventListener('click', function() {
        elemento.classList.toggle('ativo');
    });
});

const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('open');
});
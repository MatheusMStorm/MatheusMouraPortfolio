var elementosProjeto = document.querySelectorAll('.projeto');

elementosProjeto.forEach(function(elemento) {
    elemento.addEventListener('click', function() {
        elemento.classList.toggle('ativo');
    });
});
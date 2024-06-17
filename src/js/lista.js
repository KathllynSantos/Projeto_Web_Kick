document.addEventListener('DOMContentLoaded', function() {
    var verListaBtn = document.getElementById('verListaBtn');
    var categoria = document.querySelector('.categoria');

    verListaBtn.addEventListener('click', function() {
        categoria.classList.toggle('visivel');
    });
});

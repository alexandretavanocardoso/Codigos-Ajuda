var side1 = document.getElementById('side1')
window.addEventListener('scroll', function() {
    side1.style.left = -window.pageYOffset + 'px';
})

var side2 = document.getElementById('side2')
window.addEventListener('scroll', function() {
    side2.style.left = +window.pageYOffset + 'px';
})

/* 

side1.style.top = -window.pageYOffset + 'px'; // CIMA
side1.style.top = +window.pageYOffset + 'px'; // BAIXO

side1.style.left = -window.pageYOffset + 'px'; // ESQUERDA
side1.style.left = -window.pageYOffset + 'px'; // DIREITA



*/
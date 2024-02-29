const btnMenu = document.getElementById('compras');

btnMenu.addEventListener('click', () => {
    const carro = document.getElementById('carrito');
    carro.classList.toggle('mostrar');
});





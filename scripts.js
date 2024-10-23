let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    let itemsCarrito = document.getElementById('items-carrito');
    let totalCarrito = document.getElementById('total-carrito');
    let total = 0;

    itemsCarrito.innerHTML = '';
    carrito.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.textContent = `${item.nombre} - $${item.precio}`;
        itemsCarrito.appendChild(itemElement);
        total += item.precio;
    });

    totalCarrito.textContent = `$${total}`;
}

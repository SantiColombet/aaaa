document.addEventListener('DOMContentLoaded', () => {

    //cargar carrito
    let listaCarrito = JSON.parse(localStorage.getItem('carrito'));
    const productsSection = document.getElementById('products');
    listaCarrito.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const nombre = document.createElement('h2');
        nombre.textContent = item.nombre;
        productDiv.appendChild(nombre);

        const descripcion = document.createElement('p');
        descripcion.textContent = item.descripcion;
        productDiv.appendChild(descripcion);

        const precio = document.createElement('p');
        precio.textContent = `Precio: $${item.precio}`;
        productDiv.appendChild(precio);

        productsSection.appendChild(productDiv);

    });
    //borrar carrito
    const boton = document.getElementById('botonBorrar');
    boton.addEventListener('click', function(event) { 
        event.preventDefault(); 
        listaCarrito = [];
        localStorage.removeItem('carrito');
        });


    //precio
    const pPrecioFinal = document.getElementById('precioFinal');
    const precioFinal = listaCarrito.reduce((acc, item) => acc + parseInt(item.precio), 0);
    pPrecioFinal.textContent = `Precio: $${precioFinal}`;
    console.log(precioFinal);
});
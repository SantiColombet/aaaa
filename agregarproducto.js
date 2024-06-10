

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('productoForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const nombreProducto = document.getElementById("nombre").value;
            const descripcionProducto = document.getElementById("descripcion").value;
            const precioProducto = document.getElementById("precio").value;
        
            let producto = {
                nombre: nombreProducto,
                descripcion: descripcionProducto,
                precio: precioProducto
            }
            let listaProductos = JSON.parse(localStorage.getItem('listaProductos')) || [];
            listaProductos.push(producto);
            
            localStorage.setItem('listaProductos', JSON.stringify(listaProductos));


            for (const item of listaProductos) {
                console.log('Nombre:', item.nombre);
                console.log('Descripción:', item.descripcion);
                console.log('Precio:', item.precio);
            }

            localStorage.setItem('listaProductos', JSON.stringify(listaProductos));

            form.reset();
        });
    }
});



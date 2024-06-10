document.addEventListener('DOMContentLoaded', () => {

        const listaProductos2 = JSON.parse(localStorage.getItem('listaProductos'));
        const productsSection = document.getElementById('products');
        let carrito = [];
    
        if (listaProductos2 && listaProductos2.length > 0) {
            listaProductos2.forEach(item => {
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

                const boton = document.createElement('button');
                boton.classList = 'boton';
                boton.textContent = 'agregar al carrito';
                productDiv.appendChild(boton);
                boton.addEventListener('click', function(event){
                    event.preventDefault(); 
                    carrito.push(item);
                    localStorage.setItem('carrito', JSON.stringify(carrito));
                });
        
    
                productsSection.appendChild(productDiv);
            });
        } 

    

});


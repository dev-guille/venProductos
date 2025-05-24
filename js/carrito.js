class Producto{
    //Inicializamos las propiedades
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    //Creamos nuestro método
    mostrarDetalles(){
        return `${this.nombre} cuesta Q${this.precio}`;
    }
}

class Carrito{
    constructor(){
        this.productos = [];
    }
    //Método para agregar producto
    agregarProducto(producto){
        this.productos.push(producto)
    }

    //Método para calcular el total
    calcularTotal(){
        return this.productos.reduce((total, pre) => total + pre.precio, 0);
    }

    //Método para mostrar en lista los productos
    listarProductos(){
        return this.productos.map(pre => `<li> ${pre.mostrarDetalles()} </li>`).join('');
    }
}

const productosDisponibles = [
    new Producto(1, "Cable THHN #12 color rojo", 3.75),
    new Producto(2, "Cable THHN #12 color negro", 3.75)
];

const carrito = new Carrito();

//Crear función
function agregarAlCarrito(id){
    const producto = productosDisponibles.find(pre => pre.id === id);
    carrito.agregarProducto(producto);
    actualizarCarrito();
}

function actualizarCarrito(){
    document.getElementById("lista-productos").innerHTML = carrito.listarProductos();
    document.getElementById("total").textContent = carrito.calcularTotal();
}
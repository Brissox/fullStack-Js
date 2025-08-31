let productos = [
    {
        nombre: "Laptop",
        precio: 100,
        descripcion: "Esto es un producto 1",
        imagen: "https://uneg.edu.mx/wp-content/uploads/2024/09/producto-en-mercadotecnia.jpg"
    },
    {
        nombre: "Auriculares",
        precio: 40,
        descripcion: "Esto es un producto 2",
        imagen: "https://uneg.edu.mx/wp-content/uploads/2024/09/producto-en-mercadotecnia.jpg"
    },
    {
        nombre: "Radio",
        precio: 500,
        descripcion: "Esto es un producto 3",
        imagen: "https://uneg.edu.mx/wp-content/uploads/2024/09/producto-en-mercadotecnia.jpg"
    },
      {
    nombre: "Torta Cuadrada de Chocolate",
    precio: 45000,
    descripcion: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
    categoria: "Tortas Cuadradas",
    imagen: ""
  },
  {
    nombre: "Torta Cuadrada de Frutas",
    precio: 50000,
    descripcion: "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.",
    categoria: "Tortas Cuadradas",
    imagen: ""
  },
  {
    nombre: "Torta Circular de Vainilla",
    precio: 40000,
    descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
    categoria: "Tortas Circulares",
    imagen: ""
  },
  {
    nombre: "Torta Circular de Manjar",
    precio: 42000,
    descripcion: "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.",
    categoria: "Tortas Circulares",
    imagen: ""
  },
  {
    nombre: "Mousse de Chocolate",
    precio: 5000,
    descripcion: "Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.",
    categoria: "Postres Individuales",
    imagen: ""
  },
  {
    nombre: "Tiramisú Clásico",
    precio: 5500,
    descripcion: "Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.",
    categoria: "Postres Individuales",
    imagen: ""
  },
  {
    nombre: "Torta Sin Azúcar de Naranja",
    precio: 48000,
    descripcion: "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.",
    categoria: "Productos Sin Azúcar",
    imagen: ""
  },
  {
    nombre: "Cheesecake Sin Azúcar",
    precio: 47000,
    descripcion: "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.",
    categoria: "Productos Sin Azúcar",
    imagen: ""
  },
  {
    nombre: "Empanada de Manzana",
    precio: 3000,
    descripcion: "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.",
    categoria: "Pastelería Tradicional",
    imagen: ""
  },
  {
    nombre: "Tarta de Santiago",
    precio: 6000,
    descripcion: "Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos.",
    categoria: "Pastelería Tradicional",
    imagen: ""
  },
  {
    nombre: "Brownie Sin Gluten",
    precio: 4000,
    descripcion: "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.",
    categoria: "Productos Sin Gluten",
    imagen: ""
  },
  {
    nombre: "Pan Sin Gluten",
    precio: 3500,
    descripcion: "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.",
    categoria: "Productos Sin Gluten",
    imagen: ""
  },
  {
    nombre: "Torta Vegana de Chocolate",
    precio: 50000,
    descripcion: "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.",
    categoria: "Productos Vegana",
    imagen: ""
  },
  {
    nombre: "Galletas Veganas de Avena",
    precio: 4500,
    descripcion: "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.",
    categoria: "Productos Vegana",
    imagen: ""
  },
  {
    nombre: "Torta Especial de Cumpleaños",
    precio: 55000,
    descripcion: "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.",
    categoria: "Tortas Especiales",
    imagen: ""
  },
  {
    nombre: "Torta Especial de Boda",
    precio: 60000,
    descripcion: "Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.",
    categoria: "Tortas Especiales",
    imagen: ""
  }

];

let contenedorproductos = document.getElementById("producto");

productos.forEach(prod => {
    contenedorproductos.innerHTML += `
    <div class="col-md-4 mb-3">
        <div class="card h-100">
            <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
            <div class="card-body">
                <h5 class="card-title">${prod.nombre}</h5>
                <p class="card-text">${prod.descripcion}</p>
                <p class="fw-bold">$${prod.precio}</p>
                <button class="btn btn-primary">Comprar</button>
            </div>
        </div>
    </div>
    `;
});
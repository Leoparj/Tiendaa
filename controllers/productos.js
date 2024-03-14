// controllers/productos.js
const productos = [
    { id: 1, nombre: 'PC Igniter Sabanero Dynamo', descripcion: 'R7 5800X + RTX 3060 12GB', cantidad: 2, precio: 15799, imagen: 'producto1.jpg' },
    { id: 2, nombre: 'PC Igniter Rookie R3', descripcion: 'R3 3200G 8GB', cantidad: 1, precio: 4999, imagen: 'producto2.jpg' },
    { id: 3, nombre: 'PC Igniter Doom White', descripcion: 'R5 5600G 16GB', cantidad: 2, precio: 5999, imagen: 'producto3.jpg' },
    { id: 4, nombre: 'PC Igniter One Piece', descripcion: 'R5 5600G + RTX 3060 12GB', cantidad: 2, precio: 13199, imagen: 'producto4.jpg' },
    { id: 5, nombre: 'PC Igniter Zombie', descripcion: 'R7 5700X + RTX 4060 Ti 16GB', cantidad: 0, precio: 19999, imagen: 'producto5.jpg' },
    { id: 6, nombre: 'PC Igniter Habanero', descripcion: 'R7 5800X + RTX 3060 16GB', cantidad: 5, precio: 20299, imagen: 'producto6.jpg' },
    { id: 7, nombre: 'PC Igniter White Demon', descripcion: 'R9 5900X + RTX 4070 16GB', cantidad: 5, precio: 31999, imagen: 'producto7.jpg' }
  ];
  
  function getProductos() {
    return productos;
  }
  
  function getProductoPorId(id) {
    return productos.find(producto => producto.id === parseInt(id));
  }
  
  module.exports = {
    getProductos,
    getProductoPorId
  };
  
import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Nike Phantom GX Elite SG-Pro',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 29.99,
      imagen:  'https://nikearprod.vtexassets.com/arquivos/ids/1207070-800-800?width=800&height=800&aspect=true' ,   
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 2,
      nombre: 'Nike Mercurial Superfly 10 Elite Blueprint',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 49.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/1100137-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 3,
      nombre: 'Nike Phantom GX 2 Elite LV8',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 45.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/912784-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 4,
      nombre: 'Nike Mercurial Superfly 10 Elite "Electric"',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 50.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/1112628-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 5,
      nombre: 'Nike Mercurial Superfly 8 Elite FG - Player Edition',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 45.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/792248-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 6,
      nombre: 'Nike Zoom Mercurial Superfly 9 Academy Fg',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 45.99,
      imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw422107d3/products/NIDJ5625-146/NIDJ5625-146-2.JPG', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 7,
      nombre: 'Nike Phantom Luna 2 Academy Mg',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 45.99,
      imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1a290f60/products/NIFD6725-100/NIFD6725-100-2.JPG', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 8,
      nombre: 'Nike futbol zoom mercurial vapor 15 elite afa',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 45.99,
      imagen: 'https://acdn.mitiendanube.com/stores/001/291/743/products/ef1f6357-9642f4ad5952151a9a17210457472574-640-0.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 9,
      nombre: 'Nike Mercurial Vapor 15 x Air Max Plus FG',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 45.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/1128002-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',

    },
    {
      id: 10,
      nombre: 'Nike Mercurial Superfly 8 Elite Fg',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 45.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/1100830-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 11,
      nombre: 'Nike Tiempo Legend 9 Elite SG-Pro',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 45.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/1047624-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 12,
      nombre: 'Nike Phantom GX 2 Elite LV8',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 45.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/912784-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    
    {
      id: 13,
      nombre: 'Nike Air Max 97 SE',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/845765-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 14,
      nombre: 'Nike Air Max Dn',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/1066441-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 15,
      nombre: 'Nike Air Max Furyosa',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/1055532-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 16,
      nombre: 'Nike Air Max 90 LV8',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/971239-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 17,
      nombre: 'Nike Air Max 1 86 OG',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/1203901-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 18,
      nombre: 'Nike Air Max Plus',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/1140101-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id: 19,
      nombre: 'Nike Air Max 97',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/995850-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id:20,
      nombre: 'Nike Air Max 1 SC',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/995930-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id:21,
      nombre: 'Nike Air Force 1 07 LV8',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/1087687-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id:22,
      nombre: 'Nike Air Force 1 07 LX',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/811544-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {
      id:23,
      nombre: 'Nike Air Force 1 07',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/702045-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
    {

      id:24,
      nombre: 'Nike Air Force 1 Shadow',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/657996-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '0' ,
      oferta: '0',
    },
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}

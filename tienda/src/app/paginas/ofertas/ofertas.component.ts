import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Nike Phantom GX Elite SG-Pro',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 29.99,
      imagen:  'https://nikearprod.vtexassets.com/arquivos/ids/1207070-800-800?width=800&height=800&aspect=true' ,   
      disponibilidad: true,
      descuento: '10% de descuento' ,
      oferta: '6 cuotas sin interes',
    },
    
    {
      id: 3,
      nombre: 'Nike Phantom GX 2 Elite LV8',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 45.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/912784-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '20% de descuento' ,
      oferta: '6 cuotas sin interes',
    },
    
    {
      id: 6,
      nombre: 'Nike Zoom Mercurial Superfly 9 Academy Fg',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 45.99,
      imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw422107d3/products/NIDJ5625-146/NIDJ5625-146-2.JPG', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '20% de descuento' ,
      oferta: '6 cuotas sin interes',
    },
    
    
    {
      id: 9,
      nombre: 'Nike Mercurial Vapor 15 x Air Max Plus FG',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 45.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/1128002-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '30% de descuento' ,
      oferta: '6 cuotas sin interes',
    },
    
    {
      id: 12,
      nombre: 'Nike Phantom GX 2 Elite LV8',
      descripcion: 'Botines de Pasto Natural Unisex FG.',
      precio: 45.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/912784-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '10% de descuento' ,
      oferta: '6 cuotas sin interes',
    },
    {
      id: 13,
      nombre: 'Nike Air Max 97 SE',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/845765-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '110% de descuento' ,
      oferta: '6 cuotas sin interes',
    },
    {
      id: 14,
      nombre: 'Nike Air Max Dn',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/1066441-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '30% de descuento' ,
      oferta: '6 cuotas sin interes',
    },
    
    {
      id: 16,
      nombre: 'Nike Air Max 90 LV8',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/971239-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '20% de descuento' ,
      oferta: '6 cuotas sin interes',
    },
    
    
    
    {
      id:20,
      nombre: 'Nike Air Max 1 SC',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/995930-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '30% de descuento' ,
      oferta: '6 cuotas sin interes',
    },
    
    {
      id:22,
      nombre: 'Nike Air Force 1 07 LX',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/811544-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '20% de descuento' ,
      oferta: '6 cuotas sin interes',
    },

    {
      id:23,
      nombre: 'Nike Air Force 1 07',
      descripcion: 'Zapatillas de Moda para Hombre.',
      precio: 25.99,
      imagen: 'https://nikearprod.vtexassets.com/arquivos/ids/702045-800-800?width=800&height=800&aspect=true', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true,
      descuento: '10% de descuento' ,
      oferta: '6 cuotas sin interes',
    },
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(oferta: Producto) {
    this.carritoService.agregarAlCarrito(oferta);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}

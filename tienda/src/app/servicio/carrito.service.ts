import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carritoSubject = new BehaviorSubject<{ producto: Producto; cantidad: number }[]>([]);
  carrito$ = this.carritoSubject.asObservable();

  agregarAlCarrito(producto: Producto) {
    const productos = this.carritoSubject.getValue();
    const encargado = productos.find(p => p.producto.id === producto.id);

    if (encargado) {
      encargado.cantidad++;
    } else {
      this.carritoSubject.next([...productos, {producto, cantidad: 1}]);
    }
  }

  eliminarDelCarrito(productoId: number) {
    const productos = this.carritoSubject.getValue().filter(p => p.producto.id !== productoId);
    this.carritoSubject.next(productos);
  }
  
  vaciarCarrito() {
    this.carritoSubject.next([]);
  }
}

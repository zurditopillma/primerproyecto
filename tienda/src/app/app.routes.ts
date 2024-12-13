import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';

export const routes: Routes = [
    {path: "inicio", component: InicioComponent},
    {path: "productos", component: ProductosComponent},
    {path: "ofertas", component: OfertasComponent},
    {path: "contacto", component: ContactoComponent},
    {path: "quienessomos", component: QuienessomosComponent},
    {path: "carrito", component: CarritoComponent},
    {path: "", redirectTo: "inicio", pathMatch: "full"},
    {path: "**", redirectTo: "inicio"},
];


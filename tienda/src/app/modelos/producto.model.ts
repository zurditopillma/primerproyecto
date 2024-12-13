import { EnabledBlockingInitialNavigationFeature } from "@angular/router";

export interface Producto {
    id: number;
    oferta: string;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    disponibilidad: boolean;
    cantidad?: number;
    descuento: string;
}

import { Planet } from "./planet";
import { Product } from "./product";


export class ProductoxPlaneta {
    constructor(
        public id: number,
        public productoNombre: string,
        public factor_Demanda: number,
        public factorOferta: number,
        public stock: number,
        public planetaid: number,
        public productoid: number
    ) { }
}

export class Product {

    constructor(
        public id: number,
        public nombreProducto: string,
        public description: string,
        public factor_Demanda: number,
        public stock: number,
        public precio: number
    ) { }
}

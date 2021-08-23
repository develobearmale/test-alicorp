export class ProductModel {

    public id: string;
    public name: string;
    public description: string;

    constructor(b: Partial<ProductModel> = {}) {
        Object.assign(this, b);
    }   

}
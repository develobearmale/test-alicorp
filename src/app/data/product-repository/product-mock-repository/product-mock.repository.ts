import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductModel } from 'src/app/core/domain/product.model';
import { ProductRepository } from 'src/app/core/repositories/product.repository';
import { CommentMockRepositoryMapper } from './product-mock-repository-mapper';


@Injectable({
  providedIn: 'root'
})
export class ProductMockRepository extends ProductRepository {

  private listaProductos:Array<ProductModel> = new Array();

  constructor() {
    super();
    for (let index = 0; index < 5; index++) {
      let productModel = new ProductModel();
        productModel.id = index.toString();
        productModel.name = index.toString();
        productModel.description = index.toString();
      this.listaProductos.push(productModel);
    }
  }

  getAll(): Observable<ProductModel[]> {
    return of(this.listaProductos);
  }
  getById(id: string): Observable<ProductModel> {
    let product:ProductModel = new ProductModel();
      product = this.listaProductos.find((producto:ProductModel)=>producto.id==id)!;
    return of(product);
  }
  deleteProduct(id: string): Observable<any> {
    const index = this.listaProductos.findIndex((producto:ProductModel)=>producto.id==id);
    this.listaProductos.splice(index, 1);
    return of(index);
  }
  insertProduct(product: ProductModel): Observable<ProductModel> {
    this.listaProductos.push(product);
    return of(product);
  }
  updateProduct(product: ProductModel): Observable<ProductModel> {
    return of(product);
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../domain/product.model';
import { ProductRepository } from '../repositories/product.repository';

@Injectable({
  providedIn: 'root'
})
export class ProductUseCase {

  constructor(private productRepository: ProductRepository) { }

  getAll(): Observable<Array<ProductModel>>{
    return this.productRepository.getAll();
  }

  getById(id:string): Observable<ProductModel>{
    return this.productRepository.getById(id);
  }

  insertProduct(productModel:ProductModel): Observable<ProductModel>{
    return this.productRepository.insertProduct(productModel);
  }

  updateProduct(productModel:ProductModel): Observable<ProductModel>{
    return this.productRepository.updateProduct(productModel);
  }

  deleteProduct(id:string): Observable<any>{
    return this.productRepository.deleteProduct(id);
  }

}

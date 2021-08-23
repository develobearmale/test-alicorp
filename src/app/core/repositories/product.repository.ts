import { Observable } from 'rxjs';
import { ProductModel } from '../domain/product.model';

export abstract class ProductRepository {
  abstract getAll(): Observable<Array<ProductModel>>;
  abstract getById(id:string): Observable<ProductModel>;
  abstract deleteProduct(id:string): Observable<any>;
  abstract insertProduct(product:ProductModel): Observable<ProductModel>;
  abstract updateProduct(product:ProductModel): Observable<ProductModel>;
}

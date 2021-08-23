import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from 'src/app/core/domain/product.model';
import { ProductRepository } from 'src/app/core/repositories/product.repository';
import { environment } from 'src/environments/environment';
import { DataService } from '../../settings/data.service';
import { restGithub } from '../../settings/endpoints/github.endpoint';
import { ProductWebEntity } from './product-web-entity';
import { ProductWebRepositoryMapper } from './product-web-repository-mapper';

@Injectable({
  providedIn: 'root'
})
export class ProductWebRepository extends ProductRepository {

  private productWebRepositoryMapper:ProductWebRepositoryMapper = new ProductWebRepositoryMapper();

  constructor(private dataService:DataService) {
    super();
  }

  getAll(): Observable<ProductModel[]> {
    return this.dataService.get<any>(environment.urlBackend+restGithub.obtenerUsuarios).pipe(
      map((response:Array<any>)=>{
        let listaProductos:Array<ProductModel> = new Array();
        if(response){
          response.forEach((producto:ProductWebEntity) => {
            listaProductos.push(this.productWebRepositoryMapper.toEntity(producto))
          });
        }
        return listaProductos
      }));
  }
  getById(id: string): Observable<ProductModel> {
    return of(new ProductModel());
  }
  deleteProduct(id: string): Observable<any> {
    return of(new ProductModel());
  }
  insertProduct(product: ProductModel): Observable<ProductModel> {
    return of(new ProductModel());
  }
  updateProduct(product: ProductModel): Observable<ProductModel> {
    return of(new ProductModel());
  }
}

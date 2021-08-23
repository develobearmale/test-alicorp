import { Mapper } from "src/app/core/base/mapper";
import { ProductModel } from "src/app/core/domain/product.model";
import { ProductWebEntity } from "./product-web-entity";


export class ProductWebRepositoryMapper implements Mapper<ProductModel,ProductWebEntity> {
  
  public toEntity(param: ProductWebEntity): ProductModel {
    let productModel:ProductModel = new ProductModel();
      productModel.id=param.id;
      productModel.name=param.login;
      productModel.description=param.node_id;
    return productModel;
  }
  
  public toEntityResponse(param: ProductModel): ProductWebEntity {
    let productWebEntity: ProductWebEntity = {
      id: param.id,
      login: param.name,
      node_id: param.description,
    }
    return productWebEntity;
  }
}

import { Mapper } from "src/app/core/base/mapper";
import { ProductModel } from "src/app/core/domain/product.model";
import { ProductMockEntity } from "./product-mock-entity";


export class CommentMockRepositoryMapper implements Mapper<ProductModel,ProductMockEntity> {
  
  public toEntity(param: ProductMockEntity): ProductModel {
    let productModel:ProductModel = new ProductModel();
      productModel.id=param.id;
      productModel.name=param.name;
      productModel.description=param.localized_name;
    return productModel;
  }
  
  public toEntityResponse(param: ProductModel): ProductMockEntity {
    let productWebEntity: ProductMockEntity = {
      id: param.id,
      name: param.name,
      localized_name: param.description,
    }
    return productWebEntity;
  }
}

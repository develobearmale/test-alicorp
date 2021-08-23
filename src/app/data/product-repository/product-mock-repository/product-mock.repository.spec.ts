import { ProductModel } from 'src/app/core/domain/product.model';
import { ProductMockRepository } from './product-mock.repository';

describe('ProductRepositoryMockRepository', () => {
  let productMockRepository:ProductMockRepository;
  
  beforeEach(() => {
    productMockRepository = new ProductMockRepository();
  });

  it("debería obtener una lista de productos", () => {
    productMockRepository.getAll().subscribe((response)=>{
      expect(response.length).toBeGreaterThanOrEqual(1);
    })
  });

  it("debería obtener un producto", () => {
    productMockRepository.getById('1').subscribe((response)=>{
      expect(response).toBeTruthy(response);
    })
  });

  it("debería insertar un producto", () => {
    let product:ProductModel = new ProductModel();
      product.id = '20';
      product.name = 'test20';
      product.description = 'test20';
    productMockRepository.insertProduct(product).subscribe((response)=>{
      expect(response).toBeTruthy(1);
    })
  });

  it("debería modificar un producto", () => {
    let product:ProductModel = new ProductModel();
      product.id = '1';
      product.name = 'test20';
      product.description = 'test20';
    productMockRepository.updateProduct(product).subscribe((response)=>{
      expect(response).toBeTruthy(response);
    })
  });

  it("debería eliminar un producto", () => {
    productMockRepository.deleteProduct('5').subscribe((response)=>{
      expect(response).toBeTruthy(response);
    })
  });

});

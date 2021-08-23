import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductModel } from 'src/app/core/domain/product.model';
import { ProductRepository } from 'src/app/core/repositories/product.repository';
import { ProductMockRepository } from 'src/app/data/product-repository/product-mock-repository/product-mock.repository';
import { MaterialModule } from '../material.module';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  let testProducts: Array<ProductModel> = new Array();

  for (let index = 0; index < 5; index++) {
    let productModel = new ProductModel();
      productModel.id = index.toString();
      productModel.name = index.toString();
      productModel.description = index.toString();
      testProducts.push(productModel);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        MaterialModule
       ],
      providers:[       
        {provide: ProductRepository, useClass: ProductMockRepository},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería probar los valores de las filas de la tabla', (done) => {
    component.productUseCase.getAll().subscribe((listaProductos)=>{
      expect(listaProductos).toEqual(testProducts);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
    
        let tableRows = fixture.nativeElement.querySelectorAll('tr');
        expect(tableRows.length).toBe(6);
    
        // Header row
        let headerRow = tableRows[0];
        expect(headerRow.cells[0].innerHTML).toBe('Codigo');
        expect(headerRow.cells[1].innerHTML).toBe('Nombre');
        expect(headerRow.cells[2].innerHTML).toBe('Descripción');
        expect(headerRow.cells[3].innerHTML).toBe('Acción');

        let row0 = tableRows[1];
        expect(row0.cells[0].innerHTML).toBe('0');
        expect(row0.cells[1].innerHTML).toBe('0');
        expect(row0.cells[2].innerHTML).toBe('0');

        let row2 = tableRows[2];
        expect(row2.cells[0].innerHTML).toBe('1');
        expect(row2.cells[1].innerHTML).toBe('1');
        expect(row2.cells[2].innerHTML).toBe('1');

        let row3 = tableRows[3];
        expect(row3.cells[0].innerHTML).toBe('2');
        expect(row3.cells[1].innerHTML).toBe('2');
        expect(row3.cells[2].innerHTML).toBe('2');

        let row4 = tableRows[4];
        expect(row4.cells[0].innerHTML).toBe('3');
        expect(row4.cells[1].innerHTML).toBe('3');
        expect(row4.cells[2].innerHTML).toBe('3');
 
        let row5 = tableRows[5];
        expect(row5.cells[0].innerHTML).toBe('4');
        expect(row5.cells[1].innerHTML).toBe('4');
        expect(row5.cells[2].innerHTML).toBe('4');

        done();
      });
    })
    
  });
});

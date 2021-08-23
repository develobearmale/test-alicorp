import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductRepository } from './core/repositories/product.repository';
import { HttpInterceptorService } from './core/services/http-interceptor.service';
import { ProductMockRepository } from './data/product-repository/product-mock-repository/product-mock.repository';
import { MaterialModule } from './presentation/material.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
       ],
       imports: [
        AppRoutingModule,
        MaterialModule
       ],
       providers: [
        {provide: ProductRepository, useClass: ProductMockRepository},
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpInterceptorService,
          multi: true
        }
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test');
  });

});

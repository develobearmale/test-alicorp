import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductRepository } from './core/repositories/product.repository';
import { ProductWebRepository } from './data/product-repository/product-web-repository/product-web.repository';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './core/services/http-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { DataModule } from './data/data.module';
import { CoreModule } from './core/core.module';
import { PresentationModule } from './presentation/presentation.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    DataModule,
    CoreModule,
    PresentationModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide: ProductRepository, useClass: ProductWebRepository},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

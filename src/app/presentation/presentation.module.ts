import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { DataModule } from '../data/data.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SimpleDialogComponent } from './shared/dialogs/simpleDialog/simple.dialog.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    DataModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MaterialModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    SimpleDialogComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    SimpleDialogComponent
  ],
  providers: [
  ]
})
export class PresentationModule { }

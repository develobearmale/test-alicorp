import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MatRippleModule } from "@angular/material/core";
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    imports: [
      MatCardModule,
      MatRippleModule,
      MatInputModule,
      MatProgressSpinnerModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatTableModule,
      MatFormFieldModule,
      MatDialogModule,
      MatButtonModule,
      MatSnackBarModule,
    ],
    exports: [
      MatCardModule,
      MatRippleModule,
      MatInputModule,
      MatToolbarModule,
      MatTableModule,
      MatFormFieldModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

    declarations: [
    ],
  })
export class MaterialModule {};
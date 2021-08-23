import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'simple.dialog',
    templateUrl: 'simple.dialog.component.html',
    styleUrls: ['./simple.dialog.component.css']
})
export class SimpleDialogComponent {

    /**
     * @constructor
     * 
     * @param dialogRef 
     * @param data 
     */
    constructor(
        public dialogRef: MatDialogRef<SimpleDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
    
    /**
     * Función encargada de responder al botón de aceptar la eliminación
     */
    public confirmar(): void {
        this.dialogRef.close({ debeEliminar: true, elemento: this.data });
    }

}
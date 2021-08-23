import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarRef, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
  })
export class SnackBarService {

    /**
     * Variable encargada de almacenar la configuracion del snackbar
     */
    public snackBarConfig: MatSnackBarConfig;
    /**
     * Variable encargada de almacenar la referencia al snackbar
     */
    public snackBarRef: MatSnackBarRef<any>;
    /**
     * Variable encargada de almacenar la posicion horizontal del snackbar
     */
    public horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    /**
     * Variable encargada de almacenar la posicion vertical del snackbar
     */
    public verticalPosition: MatSnackBarVerticalPosition = 'bottom';
    /**
     * Variable encargada de almacenar el tiempo para ocultar el snackbar
     */
    public snackBarAutoHide = '1500';

    /**
     * @constructor
     * @param snackBar 
     */
    constructor(private snackBar: MatSnackBar) { }

    /**
     * Función encargada de mostrar el snackBar
     * @param message 
     */
    public openSnackBar(message: any): void {
        this.snackBarConfig = new MatSnackBarConfig();
        this.snackBarConfig.horizontalPosition = this.horizontalPosition;
        this.snackBarConfig.verticalPosition = this.verticalPosition;
        this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
        this.snackBarConfig.panelClass = 'custom-snackbar';
        this.snackBarRef = this.snackBar.open(message, '', this.snackBarConfig);
    }

}
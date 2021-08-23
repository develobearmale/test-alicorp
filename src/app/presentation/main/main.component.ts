import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductModel } from 'src/app/core/domain/product.model';
import { LoadingService } from 'src/app/core/services/loading.service';
import { SnackBarService } from 'src/app/core/services/snack.bar.service';
import { ProductUseCase } from 'src/app/core/usecases/product.usecase';
import { SimpleDialogComponent } from '../shared/dialogs/simpleDialog/simple.dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit  {

  /**
   * Lista de productos
   */
  public listaProducts:Array<ProductModel> = new Array();
  /**
   * Lista de nombres de columnas
   */
  public displayedColumns: string[] = ['code', 'name', 'description', 'action'];
  /**
   * Data source de la tabla de productos
   */
  public dataSource: MatTableDataSource<ProductModel> = new MatTableDataSource<ProductModel>();

  /** 
   * Paginator de la tabla
   */
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * @constructor
   * 
   * @param productUseCase 
   * @param matDialog 
   * @param snackBarService
   * @param loadingService
   */
  constructor(
    public productUseCase:ProductUseCase,
    private matDialog: MatDialog,
    private snackBarService: SnackBarService,
    private loadingService: LoadingService
    ) 
  { }

  ngOnInit(): void {

    this.productUseCase.getAll().subscribe({
      next:(response)=>{
        this.listaProducts=response;
        if(response.length==0){
          console.log("Listavacia")
        }else{
          this.dataSource = new MatTableDataSource(this.listaProducts);
          this.dataSource.paginator = this.paginator;
        }
      },
      error:()=>{
        let mensaje = `Se ha encontrado un error al traer los productos.`;
        this.snackBarService.openSnackBar(mensaje);
      }
    })
  }

  /**
   * Función encargada de eliminar elementos en tabla
   * @param productModel 
   */
  public eliminarProducto(productModel:ProductModel): void{
    const dialogRef = this.matDialog.open(SimpleDialogComponent, {
      width: '350px',
      data: productModel
    });

    dialogRef.afterClosed().subscribe((response) => {
      if(response){
        if(response.debeEliminar){
          //Fake delete
          this.loadingService.loadingSub.next(true);
          setTimeout(() => {
            const index = this.dataSource.data.findIndex((producto:ProductModel)=>producto.id==response.elemento.id);
            this.dataSource.data.splice(index, 1);
            this.dataSource._updateChangeSubscription();
            this.loadingService.loadingSub.next(false);
            let mensaje = `Se eliminó satisfactoriamente ${response.elemento.name} - ${response.elemento.description}.`;
            this.snackBarService.openSnackBar(mensaje);
          }, 1000);
        }
      }   
    });
  }

}

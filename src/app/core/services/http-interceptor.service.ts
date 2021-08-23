import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoadingService } from './loading.service';


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  /**
   * constructor
   */
  constructor(
    private loadingService: LoadingService

    ) { }

  /**
   * Meotodo que intercepta todas las llamadas HTTP
   * @param req
   * @param next 
   * @returns 
   */
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.setLoading(true, req.url);
    const modifiedReq = req.clone({ 
      headers: req.headers.set('Content-Type', 'application/json'),
    });
    return next.handle(modifiedReq).pipe(
      catchError((err: any) => {
        return throwError(err);       
      }),
      finalize(()=>{
        this.loadingService.setLoading(false, req.url);
      }),
    );
  }
}

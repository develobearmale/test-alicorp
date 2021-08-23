import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  public get<T>(endpoint: string, pathParms?: {key:string, value:any}[]): Observable<any> {
    endpoint = this.replaceUrlPathParams(endpoint, pathParms);
    return this.http
      .get<T>(endpoint, this.getHttpOptions())
      .pipe(map((response) => {
        return response;
      }));
  }

  public post<T>(endpoint: string, body: any, pathParms?: {key:string, value:any}[]): Observable<any> {
    endpoint = this.replaceUrlPathParams(endpoint, pathParms);
    return this.http
      .post<T>('environment.urlBack' + endpoint, body, this.getHttpOptions())
      .pipe(map((response) => {
        return response;
      }));
  }

   private getHttpOptions(): any {
    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    const httpOptions = {
      headers: headers
    }
    return httpOptions;
  }

  private replaceUrlPathParams(endpoint: string, pathParms?: {key:string, value:any}[]):string{
    if(pathParms){
      pathParms.forEach(pathParam => {
        endpoint = endpoint.replace(":id", pathParam.value);
      });
    }
    return endpoint;
  }

}
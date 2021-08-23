import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  /**
   * Variable para gestionar el comportamiento del loader
   */
  public loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  /**
   * Contains in-progress loading requests
   */
   public loadingMap: Map<string, boolean> = new Map<string, boolean>();

  /**
   * @constructor
   */
  constructor() { }

  /**
   * Función encargada de mostrar/ocultar el spinner de la aplicación
   * @param loading 
   * @param url 
   */
  public setLoading(loading: boolean, url?: string): void {
    if (!url) {
      throw new Error('La URL debe ser suminitrada');
    }
    if (loading === true) {
      this.loadingMap.set(url, loading);
      this.loadingSub.next(true);
    }else if (loading === false && this.loadingMap.has(url)) {
      this.loadingMap.delete(url);
    }
    if (this.loadingMap.size === 0) {
      this.loadingSub.next(false);
    }
  }
}
import { Component } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'test';
  public loading: boolean = false;

  constructor(private loadingService: LoadingService){

  }
  ngOnInit(): void {
    this.listenToLoading();
  }

  private listenToLoading(): void {
    this.loadingService.loadingSub
      .pipe(delay(0))
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}

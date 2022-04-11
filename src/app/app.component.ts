import { decrementaContador, IAppState, incrementaContador } from './store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testingNgRx';

  constructor(
    private store: Store<{app: IAppState}>){}

  ngOnInit(): void {
  }

  /*counter$ = this.store.select('app')
  .pipe(
    map(e => e.counter)
  );

  incrementaContador(){
    this.store.dispatch(incrementaContador())
  }
  decrementaContador(){
    this.store.dispatch(decrementaContador())
  }*/


}

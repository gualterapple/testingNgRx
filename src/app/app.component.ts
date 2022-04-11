import { IAppState } from './store/app.state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testingNgRx';

  constructor(private store: Store<{app: IAppState}>){}

  counter$ = this.store.select('app')
  .pipe(
    map(e => e.counter)
  );
}

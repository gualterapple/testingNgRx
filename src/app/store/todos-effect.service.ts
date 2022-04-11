import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { ITodo } from '../todo/todo.component';
import { IAppState, loadTodos, sucessoCarregaTodos, setTodos } from './app.state';

@Injectable({
  providedIn: 'root'
})
export class TodosEffectService {

constructor(private actions$: Actions,
  private http: HttpClient,
  private store: Store<{app: IAppState}>
  ) { }

  carregaTodos = createEffect(
    () => this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() => this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')),
        tap(todos => this.store.dispatch(setTodos({payload:todos}))),
        map(() => sucessoCarregaTodos())
      )
    )

}

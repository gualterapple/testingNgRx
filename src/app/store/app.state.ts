import { createAction, createReducer, on, props } from "@ngrx/store";
import { ITodo } from "../todo/todo.component";

export interface IAppState {
  counter: number;
  todos: ITodo[];
}

export const appInitialState: IAppState = {
  counter: 2,
  todos: []
}

export const incrementaContador = createAction('[App] Aumenta contador');
export const decrementaContador = createAction('[App] Reduz contador');

export const loadTodos = createAction('[App] Define Carrega Todos');
export const sucessoCarregaTodos = createAction('[App] [Sucesso] Define Sucesso Carrega Todos');
export const setTodos = createAction('[App] Define Todos', props <{payload: ITodo[]}>());

export const appReducer = createReducer(
  appInitialState,
  on(incrementaContador, (state) => {
    state = {
      ...state,
      counter: state.counter + 1}
    return state;
  }),
  on(decrementaContador, (state) => {
    state = {
      ...state,
      counter: state.counter - 1}
    return state;
  }),
  on(setTodos, (state, {payload}) => {
    state = {
      ...state,
      todos: payload}
    return state;
  }),

);



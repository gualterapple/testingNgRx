import { TodoComponent } from './todo/todo.component';
import { AppComponent } from './app.component';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    pathMatch: 'full'
  },
  {
    path: 'detalhes-usuario',
    component: DetalhesUsuarioComponent
  },
  {
    path: 'todos',
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

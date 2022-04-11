import { appReducer } from './store/app.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayContadorComponent } from './display-contador/display-contador.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { TodoComponent } from './todo/todo.component';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffectService } from './store/todos-effect.service';

@NgModule({
  declarations: [
    AppComponent,
      DisplayContadorComponent,
      DetalhesUsuarioComponent,
      TodoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({app: appReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([TodosEffectService])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

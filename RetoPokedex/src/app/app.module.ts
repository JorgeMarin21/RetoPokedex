import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: 'info/:id', component: InfoComponent},
  { path: '', component: PokedexComponent},


];
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PokedexComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

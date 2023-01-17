import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { Plato1Component } from './plato1/plato1.component';
import { Plato2Component } from './plato2/plato2.component';
import { Plato3Component } from './plato3/plato3.component';

const routes: Routes = [
  {
    path:'',
    component:InicioComponent
  },
  {
    path:'plato1/:variable',
    component:Plato1Component
  },
  {
    path:'plato2/:variable',
    component:Plato2Component
  },
  {
    path:'plato3/:variable',
    component:Plato3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

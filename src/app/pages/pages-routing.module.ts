import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { RatesComponent } from './rates/rates.component';

const routes: Routes = [
  { path: '', component: PagesComponent,
    children:[
      { path: '', component:HomeComponent},
      { path:'about-us',component:AboutUsComponent },
      { path:'rates',component:RatesComponent },
      { path:'employees',component:EmployeesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

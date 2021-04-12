import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RatesComponent } from './rates/rates.component';
import { EmployeesComponent } from './employees/employees.component';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';

// PrimeNG
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {GMapModule} from 'primeng/gmap';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    PagesComponent,
    HomeComponent,
    AboutUsComponent,
    RatesComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    GMapModule,
    DropdownModule
  ]
})
export class PagesModule { }

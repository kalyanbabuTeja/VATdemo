import { Routes } from '@angular/router';
import { VatRegUilityComponent } from './vat-utility/vat-reg-uility/vat-reg-uility.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'vat-utility/vat-reg-uility', component: VatRegUilityComponent },
  ];
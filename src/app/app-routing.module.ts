import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexReservaComponent } from './components/Reserva/index-reserva/index-reserva.component';

const routes: Routes = [
  { path: '', redirectTo: '/reserva-index', pathMatch: 'full' },
  { path: 'reserva-index', component: IndexReservaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

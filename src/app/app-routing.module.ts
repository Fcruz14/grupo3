import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexReservaComponent } from './components/Reserva/index-reserva/index-reserva.component';
import { IndexComponent } from './components/index/index.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { HeaderComponent } from './components/Header/header/header.component';
import { FooterComponent } from './components/Footer/footer/footer.component';
import { ReservarLugarComponent } from './components/reservar-lugar/reservar-lugar.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/reserva-index/0', pathMatch: 'full' },
  { path: 'reserva-index/:usuario', component: IndexReservaComponent },
  { path: 'index', component: IndexComponent },
  { path: 'login/:NombreLugar',component:IniciarSesionComponent},
  { path: 'reservar-lugar/:usuario/:nombreLugar',component:ReservarLugarComponent},
  { path: 'registrar-usuario',component:RegistrarUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

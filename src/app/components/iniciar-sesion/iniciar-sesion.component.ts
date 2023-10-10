import { Component,Input, Output, EventEmitter  } from '@angular/core';
import { IniciarSesionService } from 'src/app/services/iniciar-sesion/iniciar-sesion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent {
constructor(private iniciarSesion:IniciarSesionService, private router: Router){}
usuario:any;
contrasena:any;
mostrarAlerta:boolean=false;

IniciarSesion() {
  console.log(this.usuario,this.contrasena)
  this.iniciarSesion.postIniciarSesion(this.usuario, this.contrasena)
    .then((response) => {
      if (response.status === 200 && response.datos[0].validacion === true) {
          this.mostrarAlerta=false;
          this.router.navigate(['/reserva-index', this.usuario]);
      } else {
        this.mostrarAlerta=true
      }
    })
    .catch((error) => {
      this.mostrarAlerta=true
      console.error('Error en la solicitud:', error);
    });
}

Cerrar(){
this.mostrarAlerta=false
}

}

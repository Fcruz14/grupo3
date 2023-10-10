import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrarUsuarioService } from 'src/app/services/registrar-usuario/registrar-usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent {
nombre:any;
usuario:any;
correo:any;
contrasena:any;
ape_paterno:any;
ape_materno:any;
dni:any;

constructor(private registrarUsuario:RegistrarUsuarioService,private router: Router){}

mostrarAlerta:boolean=false;

RegistrarUsuario() {
  console.log(this.nombre,this.ape_paterno,this.ape_materno,this.usuario,this.contrasena,this.correo,this.dni)
  this.registrarUsuario.postRegistrarUsuario(this.nombre,this.ape_paterno,this.ape_materno,this.usuario,this.contrasena,this.correo,this.dni)
    .then((response) => {
      if (response.status === 200 && response.datos[0].resultado === true) {
          this.mostrarAlerta=false;
          this.router.navigate(['/reserva-index', this.usuario]);
      } else {
        this.mostrarAlerta=true
      }
    })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });
}

Cerrar(){
this.mostrarAlerta=false
}

}

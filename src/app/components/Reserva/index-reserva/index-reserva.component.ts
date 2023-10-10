import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObtenerImagenesService } from 'src/app/services/ObtenerImagenes/obtener-imagenes.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-index-reserva',
  templateUrl: 'index-reserva.component.html',
  styleUrls: ['index-reserva.component.scss']
})
export class IndexReservaComponent  implements OnInit {

  imagenes: string[] = [];
  Lugares: any[] = [];
  usuario:string | number=0;
  IniciarSesionObligatorio:boolean=false;

  @Input() datosUsuario: any; // Declaración del atributo de entrada

  constructor(private route: ActivatedRoute,private http: HttpClient, private ObtenerLugarService: ObtenerImagenesService,private router: Router) { }

  ngOnInit(): void {
    this.cargarImagenes(); // Llama a cargarImagenes() al cargar la página
    this.cargarDatosLugar();

      // Obtener el valor del parámetro "dni" de la URL
      this.route.paramMap.subscribe((params) => {
        this.usuario = params.get('usuario')!;
        console.log('usuario recibido:', this.usuario);
      });


  }

  async cargarImagenes() {
    this.imagenes = []; // Limpiar el arreglo de imágenes

    for (let n = 1; n <= 6; n++) {
      console.log(n);
      const apiUrl = 'http://localhost:8080/ObtenerImagen';
      const requestData = { n };

      // Simular un retraso de 2 segundos antes de agregar la imagen
      await this.delay(500);

      this.http.post(apiUrl, requestData, { responseType: 'blob' })
        .subscribe((data: Blob) => {
          // Crear una URL de objeto para la imagen y agregarla al arreglo
          this.imagenes.push(URL.createObjectURL(data));
        }, error => {
          console.error('Error al cargar la imagen:', error);
        });
    }
  }

  async cargarDatosLugar() {
    const apiUrl = 'http://localhost:8080/ObtenerLugar';

    // Simular un retraso de 3 segundos antes de agregar los datos del lugar
    await this.delay(500);

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        if (response.status === 200) {
          // Agregar el lugar al arreglo Lugares
          this.Lugares=(response.datos);
          console.log(response.datos);
        } else {
          // Manejar el error si es necesario
          console.error('Error al cargar el lugar:', response);
        }
      },
      (error) => {
        console.error('Error al cargar el lugar:', error);
      }
    );
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



  //sesion

  reservarAhora(nombreLugar: string) {

    if(this.usuario==='0'){

    this.router.navigate(['/login/',nombreLugar]);
  }
  else{
    this.router.navigate(['/reservar-lugar', this.usuario, nombreLugar]);




  }
  }

}

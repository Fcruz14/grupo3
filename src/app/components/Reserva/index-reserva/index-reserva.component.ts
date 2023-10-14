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
  repeticionesNombreLugar:any | null = null;
  @Input() datosUsuario: any; // Declaración del atributo de entrada

  constructor(private route: ActivatedRoute,private http: HttpClient, private ObtenerLugarService: ObtenerImagenesService,private router: Router) { }

  ngOnInit(): void {
    this.cargarImagenes(); // Llamamos a la funcion de cargar imagenes al momento de cargar la pagina


      // agarramos el dni de la url
      this.route.paramMap.subscribe((params) => {
        this.usuario = params.get('usuario')!;
        console.log('usuario recibido:', this.usuario);
      });


  }

  async cargarImagenes() {
    await this.cargarDatosLugar();
    await this.delay(400);
console.log("prueba")
    for (let n = 1; n <= this.Lugares.length; n++) {
      console.log(n);
      const apiUrl = 'http://localhost:8080/ObtenerImagen';
      const requestData = { n };
      await this.delay(300);


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

    // Simular un retraso de 0.5 segundos antes de agregar los datos del lugar
    await this.delay(400);

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        if (response.status === 200) {
          // Agregar el lugar al arreglo Lugares
          this.Lugares=(response.datos);
          console.log(response.datos);
          console.log(this.Lugares)
          console.log(this.Lugares.length)


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

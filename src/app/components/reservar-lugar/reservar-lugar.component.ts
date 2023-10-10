import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Importa Router desde '@angular/router'
import { RegistrarReservaService } from 'src/app/services/registrar-reserva/registrar-reserva.service';

@Component({
  selector: 'app-reservar-lugar',
  templateUrl: './reservar-lugar.component.html',
  styleUrls: ['./reservar-lugar.component.scss']
})
export class ReservarLugarComponent {
  usuario: string = '';
  nombreLugar: string = '';

  campaignOne: FormGroup;
  campaignTwo: FormGroup;
  fecha_inicio: string = '';
  fecha_fin: string = '';
  precio: number = 70.00;

  mostrarAlerta: boolean = false;
  constructor(
    private RegistrarReserva: RegistrarReservaService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router // Importa Router
  ) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = this.fb.group({
      start: [new Date(year, month, 13)], // Valor inicial
      end: [new Date(year, month, 16)], // Valor inicial
    });

    this.campaignTwo = this.fb.group({
      start: [new Date(year, month, 15)], // Valor inicial
      end: [new Date(year, month, 19)], // Valor inicial
    });
  }

  ngOnInit(): void {
    // Obtener los valores de usuario y nombreLugar de la URL
    this.route.paramMap.subscribe((params) => {
      this.usuario = params.get('usuario') || '';
      this.nombreLugar = params.get('nombreLugar') || '';

      // Aquí puedes usar los valores como desees
      console.log('Usuario:', this.usuario);
      console.log('Nombre del lugar:', this.nombreLugar);
    });
  }

  buscar() {
    // Obtiene las fechas en formato 'yyyy-MM-dd'
    this.fecha_inicio = this.campaignOne.get('start')!.value.toISOString().slice(0, 10);
    this.fecha_fin = this.campaignOne.get('end')!.value.toISOString().slice(0, 10);

    console.log('Fecha de inicio:', this.fecha_inicio);
    console.log('Fecha de fin:', this.fecha_fin);
  }

  calcularPrecio() {
    // Obtén las fechas seleccionadas
    const fechaInicio: any = this.fecha_inicio;
    const fechaFin: any = this.fecha_fin;
    console.log(this.fecha_inicio, this.fecha_fin);
    console.log(fechaInicio, fechaFin);

    // Calcula el intervalo de días entre las fechas
    const intervaloDias = Math.ceil((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24));
    console.log(intervaloDias);

    // Calcula el precio en función del intervalo de días
    this.precio = intervaloDias * 70.0; // Cambia la fórmula según tu lógica de precios
  }

  InsertarReserva() {
    // Formatea las fechas como "yy-mm-dd"
    const fechaInicioFormatted = new Date(this.fecha_inicio).toLocaleDateString('en-CA');
    const fechaFinFormatted = new Date(this.fecha_fin).toLocaleDateString('en-CA');
console.log(this.usuario,this.nombreLugar,fechaFinFormatted,fechaFinFormatted)
    this.RegistrarReserva.postRegistrarReserva(this.usuario, fechaInicioFormatted, fechaFinFormatted, this.nombreLugar)
      .then((response) => {
        if (response.status === 200 && response.datos[0].validacion === true) {
          this.mostrarAlerta = false;
          this.router.navigate(['/reserva-index/', this.usuario]);
        } else {
          this.mostrarAlerta = true;
        }
      })
      .catch((error) => {
        this.mostrarAlerta = true;
        console.error('Error en la solicitud:', error);
      });
  }

}

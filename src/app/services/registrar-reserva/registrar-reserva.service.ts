import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrarReservaService {

  private apiUrl = 'http://localhost:8080/RegistrarReserva';

  constructor(private http: HttpClient) {}

  // Método para enviar datos a la API
  postRegistrarReserva(usuario:any,fecha_inicio:any,fecha_retorno:any,nombre_lugar:any): Promise<any> {
    const body = { usuario,fecha_inicio,fecha_retorno,nombre_lugar};
    console.log(body);
    return this.http
      .post(this.apiUrl, body)
      .toPromise()
      .then((response) => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error:', error);
    return Promise.reject(error.message || error);
  }
}

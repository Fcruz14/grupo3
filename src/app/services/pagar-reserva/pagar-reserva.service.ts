import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagarReservaService {

  private apiUrl = 'http://localhost:8080/PagarReserva';

  constructor(private http: HttpClient) {}

  // Método para enviar datos a la API
  postPagarReserva(reserva_id:any): Promise<any> {
    const body = { reserva_id};
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

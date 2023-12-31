import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObtenerImagenesService {

  private apiUrl = 'http://localhost:8080/ObtenerLugar';

  constructor(private http: HttpClient) {}

  // Método para obtener datos de la API
  getDatosLugar(n:number): Promise<any> {
    const body = { n };
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

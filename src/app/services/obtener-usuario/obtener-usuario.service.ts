import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObtenerUsuarioService {

  private apiUrl = 'http://localhost:8080/ObtenerUsuario';

  constructor(private http: HttpClient) {}

  // Método para enviar datos a la API
  postObtenerUsuario(usuario:string): Promise<any> {
    const body = { usuario};
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

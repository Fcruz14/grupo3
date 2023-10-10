import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuarioService {

  private apiUrl = 'http://localhost:8080/RegistrarUsuario';

  constructor(private http: HttpClient) {}

  // Método para enviar datos a la API
  postRegistrarUsuario(nombre:string,ape_paterno:string,ape_materno:string,usuario:string,contraseña:string,correo:string,dni:string): Promise<any> {
    const body = { nombre,ape_paterno,ape_materno,usuario,contraseña,correo,dni};
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

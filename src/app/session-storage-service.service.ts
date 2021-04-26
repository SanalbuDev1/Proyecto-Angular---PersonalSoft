import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageServiceService {

  constructor() { }

  guardarToken(token: string) {
    window.sessionStorage.setItem('app-posts-token', token);
  }

  guardarEmail(token: string) {
    window.sessionStorage.setItem('app-posts-email', token);
  }

  guardarId(token: string) {
    window.sessionStorage.setItem('app-posts-id', token);
  }

  guardarNombre(token: string) {
    window.sessionStorage.setItem('app-posts-nombre', token);
  }

  guardarAvatar(token: string) {
    window.sessionStorage.setItem('app-posts-avatar', token);
  }

  obtenerToken(): string | null {
    return window.sessionStorage.getItem('app-posts-token');
  }

  obtenerEmail(): string | null {
    return window.sessionStorage.getItem('app-posts-email');
  }

  obtenerId(): string | null {
    return window.sessionStorage.getItem('app-posts-id');
  }

  obtenerNombre(): string | null {
    return window.sessionStorage.getItem('app-posts-nombre');
  }

  obtenerAvatar(): string | null {
    return window.sessionStorage.getItem('app-posts-avatar');
  }

  borrarSession(){
    return window.sessionStorage.clear();
  }



}

import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import { Usuario } from "./usuario";
import { HttpHeaders } from '@angular/common/http';
import { SessionStorageServiceService } from '../session-storage-service.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private registrarUrl:string = "http://18.189.21.84:5050/users";
  private loginUrl:string = "http://18.189.21.84:5050/auth";
  private postGetUrl: string = "http://18.189.21.84:5050/posts/user";
  private commentsGetUrl: string = "http://18.189.21.84:5050/posts"
  private crearComentario: string = "http://18.189.21.84:5050/comments";
  private darLike:string = "http://18.189.21.84:5050/reactions";
  private getPostAll:string = 'http://18.189.21.84:5050/posts/all';

  constructor(private http: HttpClient,
     private storage:SessionStorageServiceService) { }

  registrarUsuario(usuario:Usuario):Observable<Usuario>{
    const headers= new HttpHeaders()
    .set('content-type', 'application/json');

    return this.http.post(`${this.registrarUrl}`,JSON.stringify(usuario),{headers}).pipe(
      map( (response) => {

        return response as Usuario;
      })
    );
  }

  loginService(usuario:Usuario):Observable<Usuario>{
    const headers= new HttpHeaders()
    .set('content-type', 'application/json');

    return this.http.post(`${this.loginUrl}`,JSON.stringify(usuario),{headers}).pipe(
      map( (response) => {

        return response as Usuario;
      })
    );
  }

  getPost(id:any):Observable<any>{
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', `Bearer ${this.storage.obtenerToken()}`);

    return this.http.get(`${this.postGetUrl}/${id}`,{headers}).pipe(
      map( (response) => {

        return response as any;
      })
    );
  }

  getPostAllS():Observable<any>{
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', `Bearer ${this.storage.obtenerToken()}`);

    return this.http.get(`${this.getPostAll}`,{headers}).pipe(
      map( (response) => {

        return response as any;
      })
    );
  }

  getComments(id:any):Observable<any>{
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', `Bearer ${this.storage.obtenerToken()}`);

    return this.http.get(`${this.commentsGetUrl}/${id}`,{headers}).pipe(
      map( (response) => {

        return response as any;
      })
    );
  }

  createPost(datos:any):Observable<any>{
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', `Bearer ${this.storage.obtenerToken()}`);

    return this.http.post(`${this.commentsGetUrl}`,JSON.stringify(datos),{headers}).pipe(
      map( (response) => {

        return response as any;
      })
    );
  }

  crearComentarios(usuario:any):Observable<Usuario>{
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', `Bearer ${this.storage.obtenerToken()}`);

    return this.http.post(`${this.crearComentario}`,JSON.stringify(usuario),{headers}).pipe(
      map( (response) => {

        return response as Usuario;
      })
    );
  }

  darLiked(usuario:any):Observable<Usuario>{
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', `Bearer ${this.storage.obtenerToken()}`);

    return this.http.post(`${this.darLike}`,JSON.stringify(usuario),{headers}).pipe(
      map( (response) => {

        return response as Usuario;
      })
    );
  }
}

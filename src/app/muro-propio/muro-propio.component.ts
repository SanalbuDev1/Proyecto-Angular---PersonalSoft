import { Component, OnInit , AfterContentInit } from '@angular/core';
import { UsuarioService } from '../service/UsuarioService';
import { SessionStorageServiceService } from '../session-storage-service.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import Swal from 'sweetalert2';
import {Router} from '@angular/router';


@Component({
  selector: 'app-muro-propio',
  templateUrl: './muro-propio.component.html',
  styleUrls: ['./muro-propio.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class MuroPropioComponent implements OnInit,AfterContentInit {

  constructor(private storage:SessionStorageServiceService,
    private usuarioService:UsuarioService,
    private modalService: NgbModal,
    private router: Router
      ) { }
  avatar:any = "";
  nombre:any = "";
  email:any = "";
  respuesta:any = {};
  p:number=1;

  postSeleccionado:any = {};

  datos:any = {
    posted_text:'',
    image_url:'',
    user_id:0
  }

  datosComentario:any = {
    comment:'',
    post_id:0,
    user_id:0
  }

  posted_text:string = "123";


  ngAfterContentInit(){
    console.log("cambios");
  }
  ngOnInit(): void {
    this.obtenerSesion();
    this.getPostSuscribe();
  }

  obtenerSesion(): any  {
    this.avatar = this.storage.obtenerAvatar();
    this.nombre = this.storage.obtenerNombre();
    this.email = this.storage.obtenerEmail();
  }

  getPostSuscribe(){
    const tokenId = this.storage.obtenerId();
    this.usuarioService.getPost(tokenId).subscribe(
      (respuesta:any) => {
        this.respuesta = respuesta;
      });
  }

  modal(content:any,dato:any): any{
    if(dato.comments){
      this.usuarioService.getComments(dato.ID).subscribe(
        (respuesta:any) => {
          this.postSeleccionado = respuesta.comments;
        });
      this.modalService.open(content);
    }

  }
  likes:any = {
    post_id:0,
    user_id:0
  }
  like(item:any){
    this.likes.post_id = item.ID
    this.likes.user_id = Number(this.storage.obtenerId());


    console.log("seguimiento" + JSON.stringify(this.likes));


    this.usuarioService.darLiked(this.likes).subscribe(

      (respuesta:any) => {
        this.postSeleccionado = respuesta.comments;
        this.getPostSuscribe();

      });
      this.ngOnInit();

  }

  crearPost(content:any){
    this.modalService.open(content);
  }

  crearPostForm(form:NgForm){
    this.datos.user_id = Number(this.storage.obtenerId());
    if (form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }else{
      this.usuarioService.createPost(this.datos).subscribe(
        (respuesta:any) => {
          this.postSeleccionado = respuesta.comments;

          Swal.fire(
            'Correcto',
            "Se anañadio",
            'success'
          );
        },(error => {
          Swal.fire(
            'Error',
            "Se logeo",
            'error'
          );
        }));

        this.getPostSuscribe();
    }
}

comentarioD(content:any,item:any){
  this.modalService.open(content);
  this.datosComentario.post_id = Number(item.ID);

}

crearComentario(form:NgForm){
  this.datosComentario.user_id = Number(this.storage.obtenerId());

  if (form.invalid) {
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
    });
    return;
  }else{
    console.log("seguimiento" + JSON.stringify(this.datosComentario))
    this.usuarioService.crearComentarios(this.datosComentario).subscribe(
      (respuesta:any) => {
        this.postSeleccionado = respuesta.comments;

        Swal.fire(
          'Correcto',
          "Se creo comentario",
          'success'
        );
      },(error => {
        Swal.fire(
          'Error',
          "No se inserto comentario",
          'error'
        );
      }));

      this.getPostSuscribe();
  }
}

}

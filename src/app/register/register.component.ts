import { Component, OnInit } from '@angular/core';
import { Observable, of } from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {NgForm} from '@angular/forms';
import { UsuarioService } from '../service/UsuarioService';
import { Usuario } from '../service/usuario';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  respuesta:any = {};
  tituloAlerta:string = "";

  constructor(private http: HttpClient,
    private usuarioService:UsuarioService ) { }


  usuario = {
    name:'',
    email: '',
    password: ''
  };

  ngOnInit(): void {
  }

  registrar(form: NgForm){
    console.log(form);
    if (form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }else{
      console.log(JSON.stringify(this.usuario) + "bien");
      this.usuarioService.registrarUsuario(this.usuario).subscribe(
        (respuesta) => {
          this.respuesta = respuesta;
         if(respuesta.email){
          Swal.fire(
            'Correcto',
            "Se registro",
            'success'
          );

         }
        },(error => {
          Swal.fire(
            'Error',
            "Ocurrió un error registrando",
            'error'
          );
        })
       );
    }
  }

}

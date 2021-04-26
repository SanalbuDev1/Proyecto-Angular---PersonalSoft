import { Component, OnInit } from '@angular/core';
import { Observable, of } from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {NgForm} from '@angular/forms';
import { UsuarioService } from '../service/UsuarioService';
import { Usuario } from '../service/usuario';
import Swal from 'sweetalert2';
import { SessionStorageServiceService } from '../session-storage-service.service';
import {Router} from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  respuesta:any = {};
  tituloAlerta:string = "";

  constructor(private http: HttpClient,
    private usuarioService:UsuarioService,
    private sessionStorage:SessionStorageServiceService,
    private router: Router ) { }


  usuario = {
    email: '',
    password: ''
  };

  ngOnInit(): void {
  }

  login(form: NgForm){
    console.log(form);
    if (form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }else{
      console.log(JSON.stringify(this.usuario) + "bien");
      this.usuarioService.loginService(this.usuario).subscribe(
        (respuesta:any) => {
          console.log("respuesta " + JSON.stringify(respuesta))
          this.respuesta = respuesta;
         if(respuesta.token){
          Swal.fire(
            'Correcto',
            "Se logeo",
            'success'
          );
          this.sessionStorage.guardarToken(respuesta.token);
          this.sessionStorage.guardarEmail(respuesta.user.email);
          this.sessionStorage.guardarId(respuesta.user.ID);
          this.sessionStorage.guardarNombre(respuesta.user.name);
          this.sessionStorage.guardarAvatar(respuesta.user.avatar);

          console.log(this.sessionStorage.obtenerToken());
          this.router.navigate(['/muro']);


         }
        },(error => {
          Swal.fire(
            'Error',
            "Ocurrió un error logeando",
            'error'
          );
        })
       );
    }
  }

}

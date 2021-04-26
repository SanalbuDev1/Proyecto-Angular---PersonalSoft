import { Component, OnInit } from '@angular/core';
import { SessionStorageServiceService } from '../session-storage-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private sessionStorage:SessionStorageServiceService) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.sessionStorage.borrarSession();
  }

  booleanD(): boolean{
    if(this.sessionStorage.obtenerToken()){
      return true
    }else{
      return false;
    }
  }

}

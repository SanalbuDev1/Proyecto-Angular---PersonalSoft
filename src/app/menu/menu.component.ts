import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/UsuarioService';
import { SessionStorageServiceService } from '../session-storage-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private usuarioService:UsuarioService,
    private storage:SessionStorageServiceService) { }

  ngOnInit(): void {



  }

}

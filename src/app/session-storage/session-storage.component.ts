import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-storage',
  templateUrl: './session-storage.component.html',
  styleUrls: ['./session-storage.component.scss']
})
export class SessionStorageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarToken(token: string) {
    window.sessionStorage.setItem('app-posts-token', token);
  }

  obtenerToken(): string | null {
    return window.sessionStorage.getItem('app-posts-token');
  }

}

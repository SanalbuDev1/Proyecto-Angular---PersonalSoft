import { Injectable } from '@angular/core';
import { SessionStorageServiceService } from './session-storage-service.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class GuardianLoginServiceService implements CanActivate{

  constructor(
    private storage: SessionStorageServiceService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const token = this.storage.obtenerToken();
    if (Boolean(token)) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}

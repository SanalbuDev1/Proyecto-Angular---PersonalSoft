import {RouterModule, Routes} from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { GuardianLoginServiceService } from '../guardian-login-service.service';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../login/login.component';
import { MenuComponent } from '../menu/menu.component';
import { MuroGeneralComponent } from '../muro-general/muro-general.component';
import { MuroPropioComponent } from '../muro-propio/muro-propio.component';
import { RegisterComponent } from '../register/register.component';



const appRoutes: Routes = [
  { path: '', component: LoginComponent,  },
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'curso/:id', component: DetalleCursoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'muro', component: MuroPropioComponent ,canActivate: [GuardianLoginServiceService] },
  { path: 'muroGeneral', component: MuroGeneralComponent, canActivate: [GuardianLoginServiceService] }



];

export const routing = RouterModule.forRoot(appRoutes);

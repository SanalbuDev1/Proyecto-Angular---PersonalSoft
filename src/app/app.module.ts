import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { routing } from './routes/app_routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SessionStorageComponent } from './session-storage/session-storage.component';
import { MuroPropioComponent } from './muro-propio/muro-propio.component';
import { GuardianLoginServiceService } from './guardian-login-service.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MuroGeneralComponent } from './muro-general/muro-general.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SessionStorageComponent,
    MuroPropioComponent,
    MuroGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [GuardianLoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

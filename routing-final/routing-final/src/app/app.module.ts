import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GcViewComponent } from './gc-view/gc-view.component';
import { OrderPalletComponent } from './order-pallet/order-pallet.component';
import { PaletManagmentComponent } from './palet-managment/palet-managment.component';
import { DefectReportingComponent } from './defect-reporting/defect-reporting.component';
//Bootstrap Dependency
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { TestRestApiComponent } from './test-component/test-rest-api/test-rest-api.component';
import { DataServiceService } from './-services/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    GcViewComponent,
    OrderPalletComponent,
    PaletManagmentComponent,
    DefectReportingComponent,
    TestRestApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
   
  ],
  providers: [AuthService, AuthGuard, DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

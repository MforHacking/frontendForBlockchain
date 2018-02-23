import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



//Routes 
import { HomeComponent } from './home/home.component';
import { GcViewComponent } from './gc-view/gc-view.component';
import { OrderPalletComponent } from './order-pallet/order-pallet.component';
import { PaletManagmentComponent } from './palet-managment/palet-managment.component';
import { DefectReportingComponent } from './defect-reporting/defect-reporting.component';

//Fallback options
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gcView', component: GcViewComponent },
  { path: 'order', component: OrderPalletComponent },
  { path: 'management', component: PaletManagmentComponent },
  { path: 'defect', component: DefectReportingComponent },

  //  fall back opption
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' },
  
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

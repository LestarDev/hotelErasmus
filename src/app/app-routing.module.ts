import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { BookingComponent } from './pages/booking/booking.component';

const routes: Routes = [
  { path:'home', component: MainPageComponent },
  { path:'booking', component: BookingComponent },
  { path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AddSpecialEventsComponent } from './add-special-events/add-special-events.component';

const routes: Routes = [
  {path:'',redirectTo:'/events',pathMatch:'full'},
  {path:'events',component:EventsComponent},
  {path:'special',component:SpecialEventsComponent,canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'add-special-events',component:AddSpecialEventsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

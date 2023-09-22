import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './+Pages/signin/signin.component';
import { SignUpComponent } from './+Pages/sign-up/sign-up.component';
import { LoginmanagerComponent } from './+Pages/loginmanager/loginmanager.component';


const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:'manager',component:LoginmanagerComponent},
  {path:'signup',component:SignUpComponent},
  {path:'',redirectTo:'/signin',pathMatch:'full'},
  { path: 'admins', loadChildren: () => import('./admins/admins.module').then(m => m.AdminsModule) },
  { path: 'restaurants', loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {path:'**',redirectTo:'/signin'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants.component';
import { MyRequestsComponent } from './+Pages/my-requests/my-requests.component';

const routes: Routes = [
  {
    path: '', component: RestaurantsComponent, children:[
      {path:'MyRequests',component:MyRequestsComponent}
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }

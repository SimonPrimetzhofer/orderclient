import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddOrderComponent } from './add-order/add-order.component';


const routes: Routes = [
  { path: 'orders/:id', component: OrderComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'add', component: AddOrderComponent },
  { path: '', redirectTo: 'navigation', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

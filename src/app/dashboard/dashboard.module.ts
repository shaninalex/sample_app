import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Route[] = [
    { path: "", pathMatch: "full", component: DashboardComponent},
    { path: "products", component: ProductsComponent},
];

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }

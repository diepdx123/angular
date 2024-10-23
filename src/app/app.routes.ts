import { Routes } from '@angular/router';
import { ProductService } from './services/product.service';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsEditComponent } from './pages/products-edit/products-edit.component';
import { ProductsAddComponent } from './pages/products-add/products-add.component';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/add', component: ProductsAddComponent },
  { path: 'products/:id/edit', component: ProductsEditComponent },
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCreateProductComponent } from './components/form-create-product/form-create-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsContainer } from './containers/products/products.container';

const routes: Routes = [
  {
    path: '',
    component: ProductsContainer,
  },
  {
    path:'create',
    component: FormCreateProductComponent
  },
  {
    path:'edit/:id',
    component: ProductEditComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsContainer } from './containers/products/products.container';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';
import { FormCreateProductComponent } from './components/form-create-product/form-create-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsContainer,
    FormCreateProductComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ProductModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/services/models/product.model';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.product$ = this.router.params.pipe(
      switchMap((params: Params) => this.productService.getProduct(params.id))
    );
  }

  createProduct() {
    const newProduct: Product = {
      id: '43',
      title: 'Nuevo desde Angular',
      image: '/assets/images/camiseta.png',
      description: 'description',
      category: '',
      price: 10000,
    };
    this.productService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct() {
    const update: Partial<Product> = {
      id: '7',
      title: 'Cambio desde Angular',
    };
    this.productService
      .updateProduct('7', update)
      .subscribe((product) => console.log(product));
  }

  deleteProduct() {
    this.productService
      .deleteProduct('7')
      .subscribe((product) => console.log(product));
  }
}

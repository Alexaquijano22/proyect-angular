import { Component, OnInit } from '@angular/core';
import { Product } from '@core/services/models/product.model';
import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss'],
})
export class ProductsContainer implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProduct();
  }

  clickProduct(id: number) {
    console.log(id);
  }

  fetchProduct() {
    this.productService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }
}

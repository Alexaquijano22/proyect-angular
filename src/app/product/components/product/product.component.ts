import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/core/services/models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  @Input() product: Product;

  @Output() productClicked = new EventEmitter<any>();

  addProduct() {
    console.log("Añadir producto al carrito de compras");
    this.cartService.addCart(this.product)
  }

}



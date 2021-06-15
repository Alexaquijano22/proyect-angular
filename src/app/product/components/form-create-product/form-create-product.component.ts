import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';

import { MyValidators } from 'src/app/utils/validators';



@Component({
  selector: 'app-form-create-product',
  templateUrl: './form-create-product.component.html',
  styleUrls: ['./form-create-product.component.scss']
})
export class FormCreateProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService : ProductsService,
    private router : Router,
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.IsPriceValid] ],
      description: ['', [Validators.required]],
    })
  }

  saveProduct(e: Event){
    e.preventDefault()
    if(this.form.valid){
      this.productService.createProduct(this.form.value).subscribe(newProduct => {
        this.router.navigate(['./products'])
      })
    }
    
  }

  get priceForm(){
    return this.form.get('price')
  }

}

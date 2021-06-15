import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';

import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService : ProductsService,
    private router : Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) =>{
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe(product => {
        this.form.patchValue(product)
      })
    })
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
      this.productService.updateProduct(this.id, this.form.value).subscribe(newProduct => {
        this.router.navigate(['./products'])
      })
    }
    
  }

  get priceForm(){
    return this.form.get('price')
  }


}

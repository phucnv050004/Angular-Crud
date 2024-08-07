import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { TProduct } from '../../interfaces/TProduct';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  form = this.formBuilder.group({
    name: ['', [Validators.required,Validators.minLength(3)]],
    price:['',[Validators.required]],
    imageUrl:[''],
    description:['']

  })
 constructor(private productService : ProductService,
             private formBuilder: FormBuilder,
             private route : Router
){}

onSubmit(){
if (this.form.invalid) return;
this.productService.addProduct(this.form.value as TProduct).subscribe(()=>{
alert('Them thanh cong')
this.route.navigateByUrl('/')
})

}
}

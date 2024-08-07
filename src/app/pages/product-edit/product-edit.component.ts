import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TProduct } from '../../interfaces/TProduct';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  form = this.formBuilder.group({
    name: ['', [Validators.required,Validators.minLength(3)] ],
    price:['',[Validators.required]],
    imageUrl:[''] ,
    description:['']

  })
 constructor(private productService : ProductService,
             private route : ActivatedRoute,
             private formBuilder: FormBuilder,
             private router : Router
){
  this.route.params.subscribe(params =>{
    const id = params['id'];
    this.productService.getProductById(id).subscribe(product =>{
    this.form.patchValue(product);
    })
  })
}

onSubmit(){
if (this.form.invalid) return;
const id = this.route.snapshot.params['id'];
this.productService.updateProduct({id, ...this.form.value} as TProduct).subscribe(()=>{
alert('Them thanh cong')
this.router.navigateByUrl('/')
})

}
}


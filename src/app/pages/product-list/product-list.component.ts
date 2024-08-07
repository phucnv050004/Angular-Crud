import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { TProduct } from '../../interfaces/TProduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products!:TProduct[];
constructor(private productService : ProductService){
  this.productService.getProducts().subscribe(products =>
  this.products = products)
}
removeItem(id:number){
  if(confirm('Are you sure?')){
    this.productService.removeProduct(id).subscribe(()=>{
    this.products = this.products.filter((product)=>product.id !== id);
    alert('Deleted successfully')
    })
  }
}
}

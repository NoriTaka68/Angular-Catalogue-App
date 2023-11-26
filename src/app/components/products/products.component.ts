import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products!: Array<Product>;

  erroMessage!: string;

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        this.erroMessage = err;
      }
    });
  }

  handleDeleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index, 1)
  }

}

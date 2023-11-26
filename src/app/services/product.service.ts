import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products!: Array<Product>;

  constructor() {
    this.products = [
      { id: 1, name: "Computer", price: 6500 },
      { id: 2, name: "Printer", price: 350 },
      { id: 3, name: "SmartPhone", price: 400 },
    ];
  }

  public getAllProducts(): Observable<Product[]> {
    return of(this.products)
  }

}

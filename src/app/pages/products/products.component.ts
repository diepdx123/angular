import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/product';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products!: IProduct[];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((data) => (this.products = data));
  }

  onRemove(id: number) {
    const confirm = window.confirm('ban chac chan xoa?');
    if (confirm) {
      this.productService.delete(id).subscribe(() => {
        alert('xoa thanh cong!');
        this.products = this.products.filter((products) => products.id !== id);
      });
    }
  }
}

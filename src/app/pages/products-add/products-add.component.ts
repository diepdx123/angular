import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-products-add',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './products-add.component.html',
  styleUrl: './products-add.component.css',
})
export class ProductsAddComponent {
  productForm!: any;
  constructor(
    private productService: ProductService,
    private formBuiler: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.productForm = this.formBuiler.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      image: [''],
      description: [''],
    });
  }

  onAdd() {
    if (this.productForm.invalid) return;
    this.productService.add(this.productForm.value).subscribe((data) => {
      alert('them thanh cong');
      this.router.navigateByUrl('products');
    });
  }
}

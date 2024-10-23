import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-products-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './products-edit.component.html',
  styleUrl: './products-edit.component.css',
})
export class ProductsEditComponent {
  productForm!: any;

  constructor(
    private productSErvice: ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.params['id'];
    this.productSErvice.getProductById(id).subscribe((data) => {
      this.productForm.patchValue(data);
    });
  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      image: [''],
      description: [''],
    });
  }
  onUpdate() {
    const id = +this.route.snapshot.params['id'];
    if (this.productForm.invalid) return;
    this.productSErvice
      .update({ ...this.productForm.value, id })
      .subscribe((data) => {
        alert('update thanh cong');
        this.router.navigateByUrl('products');
      });
  }
}

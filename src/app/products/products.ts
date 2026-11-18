
import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Product } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [NgForOf, NgIf],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true
})
export class Products implements OnInit {

  products: any[] = [];

  constructor(private product: Product) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.product.getAllProducts().subscribe({
      next: (resp: any[]) => {
        this.products = resp;
      },
      error: (err: any) => {
        console.log('Erreur lors du chargement :', err);
      }
    });
  }

  handleDelete(p: any): void {
    let v = confirm('Êtes-vous sûr de vouloir supprimer ?');

    if (v === true) {
      this.product.deleteProduct(p).subscribe({
        next: (value: any) => {
          console.log('Produit supprimé avec succès');
          this.getAllProducts();
        },
        error: (err: any) => {
          console.log('Erreur lors de la suppression :', err);
        }
      });
    }
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Product {

  private url = 'http://localhost:8094/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  deleteProduct(product: any): Observable<any> {
    return this.http.delete<any>(
      this.url + '/' + product.id
    );
  }
}

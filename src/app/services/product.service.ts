import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = 'http://localhost:3000/phones';
const apiUrl2 = 'http://localhost:3000/phones?status=1';
const apiUrl2L = 'http://localhost:3000/phones?_sort=name&_order=asc';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(apiUrl);
  }

  getProduct(id: undefined | string) {
    return this.http.get(`${apiUrl}/${id}`);
  }

  getProducts2() {
    return this.http.get(apiUrl2);
  }
  getProducts2L() {
    return this.http.get(apiUrl2L);
  }

  deleteProduct(id: number | string) {
    return this.http.delete(`${apiUrl}/${id}`);
  }

  createProduct(data:  {name: string, desc: string, price: number,image_url: string, status: number}){
    return this.http.post(apiUrl, data);
  }

  updateProduct(id: number | string, data:  {name: string, desc: string, price: number,image_url: string, status: number}){
    return this.http.put(`${apiUrl}/${id}`, data);
  }
}

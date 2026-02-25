import { Inject } from "@angular/core";
import { Category } from "./models/category.model";
import { Product } from "./models/product.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Apple smartphone',
      price: 500000,
      image: 'image_link',
      rating: 4.8,
      link: 'https://kaspi.kz/...',
      likes: 0,
      categoryId: 1
    }
  ];

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kaspi.kz');

  selectedCategoryId: number | null = null;

  selectCategory(id: number) {
  this.selectedCategoryId = id;
}
}

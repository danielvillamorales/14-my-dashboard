import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from '@angular/core';
import { ProductCarComponent } from './ui/product-car/product-car.component';
import { Product } from '../../../interfaces/product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, ProductCarComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy {
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
  public products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      quantity: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 20,
    },
  ]);

  private readonly intervalSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((products) => [
          ...products,
          {
            id: products.length + 1,
            name: `Product ${products.length + 1}`,
            quantity: 10 * (products.length + 1),
          },
        ]);
      }),
      take(7)
    )
    .subscribe();

  public updateProduct(product: Product, quantity: number): void {
    this.products.update((products) =>
      products.map((p) => (p.id === product.id ? { ...p, quantity } : p))
    );
  }
}

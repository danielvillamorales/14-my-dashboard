import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Product } from '../../../../../interfaces/product.interface';

@Component({
  selector: 'app-product-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-car.component.html',
  styleUrl: './product-car.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCarComponent {
  public product = input.required<Product>();

  public onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }
}

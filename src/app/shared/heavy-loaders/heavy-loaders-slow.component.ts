import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `<section [ngClass]="['w-full h-[600px]', cssClass]">
    heavy loader slow
  </section>`,
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) cssClass!: string;
  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {
      // Artificial delay
    }
  }
}

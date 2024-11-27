import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MaterialComponent {}

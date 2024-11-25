import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { Service } from '../../../services/.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `<app-title [title]="titleLabel()"></app-title>
    @if (user()) {
    <section>
      <img [srcset]="user()!.avatar" alt="" />
      <pre>{{ user() | json }}</pre>
    </section>
    }@else {
    <p>Cargando la infrmacion</p>
    } `,
  styles: ``,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(Service);

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `User: ${this.user()?.first_name} ${this.user()?.last_name}`;
    }
    return 'User';
  });
}

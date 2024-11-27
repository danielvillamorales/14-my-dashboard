import { Component, inject } from '@angular/core';
import { Service } from '../../../services/.service';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
    imports: [CommonModule, TitleComponent, RouterModule],
    templateUrl: './users.component.html',
    styles: ``
})
export default class UsersComponent {
  public usersService = inject(Service);

  constructor() {
    this.usersService.users();
  }
}

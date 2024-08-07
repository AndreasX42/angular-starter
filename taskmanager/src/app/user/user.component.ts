import { Component, computed, EventEmitter, input, Input, Output, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { User } from '../user/user.model';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required:true}) isUserSelected!: Boolean;
  @Output() select = new EventEmitter();

  imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}

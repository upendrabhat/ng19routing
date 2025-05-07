import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users:any;
  constructor(us:UserService){
    us.getUsers().subscribe(users=>this.users=users);
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userdetail',
  standalone: false,
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.css'
})
export class UserdetailComponent {
  id:string;
  user:any;
  constructor(ar:ActivatedRoute, private us:UserService){
    this.id=ar.snapshot.params['id'];this.id = ar.snapshot.params['id'];   
    this.us.getUserById(this.id).subscribe((data:any)=>{
      this.user=data;
      console.log(this.user);
    })
  }
}

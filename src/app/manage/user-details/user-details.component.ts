import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService, User } from 'src/app/user.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserStatusPipe } from '../user-status.pipe';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers:[UserStatusPipe]
})
export class UserDetailsComponent implements OnInit {

  user: User;
  constructor(private route: ActivatedRoute, private usersService: UserService) {


  }
  ngOnInit() {

    this.route.params.subscribe(
      (param) => {
          this.usersService.getUser(param["id"]).subscribe(
          (result) => {
            this.user = result
          },
          (error)=> {
             alert(error);
          } 
        )
      }
    );
  }

}

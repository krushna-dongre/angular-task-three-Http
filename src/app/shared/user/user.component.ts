import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from 'src/app/user.service';
import { UserFullnamePipe } from '../user-fullname.pipe';
import { ParamKey } from 'param-key.enum';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserFullnamePipe]
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Input() route:string;
  activeRoute: string= "";

  constructor(private router: Router, private userService : UserService,
     private userFullname : UserFullnamePipe) {  }

  ngOnInit() {
    this.activeRoute = this.route;
  }

  deactiveUserClicked(user){
    user.isDeleted = true;
    this.userService.updateUser(user).subscribe();
  }
  activeUserClicked(user){
    user.isDeleted = false;
    this.userService.updateUser(user).subscribe();
  }

  handleDetails(user){
    this.router.navigate([ParamKey.MANAGE, user.id]);
  }

  handleEdit(id: string){
    this.router.navigate([ParamKey.EDIT_USER, id]);
  }
}

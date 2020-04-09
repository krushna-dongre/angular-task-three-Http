import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';
import { AppSettings } from '../../../../constants';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userId : string;

  updateForm: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(new RegExp(AppSettings.PASS_PATTERN)),
    ]),
    age: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      (param) => {
        this.userId = param['id'];
      }
    );
  }

  updateUser() {
    this.userService.updateUser(
      {
        ...this.updateForm.value,
        id: this.userId,
      }

    ).subscribe(
      (result) => {
        this.updateForm.reset();
      }
    );
  }

}

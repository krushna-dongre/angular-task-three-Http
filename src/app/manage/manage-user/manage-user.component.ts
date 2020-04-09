import { Component, OnInit } from '@angular/core';
  import { Route, Router } from '@angular/router';
import { ParamKey } from 'param-key.enum';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  route = "manage";
  constructor(private _route: Router) { }

  ngOnInit() {
  }
  showForm()
  {
    this._route.navigate([ParamKey.CREATE_USER]);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserStatusPipe } from './user-status.pipe';

const manageRoutes: Routes = [
  {
      path: '', component: ManageUserComponent, 
      children: [
        { path: 'create', component: CreateNewUserComponent},  
        { path: ':id', component: UserDetailsComponent },  
        { path: 'edit/:id', component: EditUserComponent}
      ]
  },
];


@NgModule({
  declarations: [ManageUserComponent, UserDetailsComponent, CreateNewUserComponent, EditUserComponent, UserStatusPipe],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(manageRoutes),
  ],
  exports:[
    ManageUserComponent, UserDetailsComponent, CreateNewUserComponent, EditUserComponent, UserStatusPipe
  ]
})
export class ManageModule { }

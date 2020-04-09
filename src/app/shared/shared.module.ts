import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserFullnamePipe } from './user-fullname.pipe';



@NgModule({
  declarations: [UserComponent, UserlistComponent, UserFullnamePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[UserComponent, UserlistComponent, UserFullnamePipe]
})
export class SharedModule { }

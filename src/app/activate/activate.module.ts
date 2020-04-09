import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivateUserComponent } from './activate-user/activate-user.component';



@NgModule({
  declarations: [ActivateUserComponent],
  imports: [
    CommonModule,
    
  ],
  exports:[
    ActivateUserComponent
  ]
})
export class ActivateModule { }

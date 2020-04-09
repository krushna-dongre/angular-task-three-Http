import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivateUserComponent } from './activate/activate-user/activate-user.component';
import { DeletedUserComponent } from './deleted/deleted-user/deleted-user.component';
import { ParamKey } from '../../param-key.enum';

const routes: Routes = [
  { path: ParamKey.HOME, component: HomeComponent },
   { path: ParamKey.ACTIVATE, component: ActivateUserComponent},
   { path: ParamKey.DELETED, component: DeletedUserComponent},
   {
    path: ParamKey.MANAGE, 
    loadChildren: ()=> import('./manage/manage.module').then(
        (file) => file.ManageModule
    )
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

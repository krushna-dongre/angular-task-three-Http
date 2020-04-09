import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {

  transform(user: any): any {
    return user.isDeleted?'Deactive':'Active';
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../constants';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(AppSettings.SERVER_USER_URI);
  }

  getUser(id: string) {
    return this.http.get<User>(`${AppSettings.SERVER_USER_URI}/${id}`);
  }

  createUser(user: User) {
    return this.http.post(AppSettings.SERVER_USER_URI, user);
  }

  updateUser(user: Partial<User>) {
    return this.http.put(`${AppSettings.SERVER_USER_URI}/${user.id}`, {
      password: user.password,
      age: user.age,
      isDeleted: user.isDeleted
    });   
 }

  delete(id: string) {
    return this.http.delete(`${AppSettings.SERVER_USER_URI}/${id}`);
  }
}

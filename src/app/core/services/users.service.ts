import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { UserRegister } from '../models/user-register';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private api: ApiService) {}

  public dangKy(values: UserRegister): Observable<any> {
    return this.api.post('QuanLyNguoiDung/DangKy', values);
  }
}

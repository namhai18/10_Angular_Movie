import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      taiKhoan: new FormControl('', [Validators.required]),
      matKhau: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });
  }

  onSubmit() {
    console.log(this.form.value);
    // Tương tự bên register, gọi api đăng nhập
    // Kiểm tra ma loại người dùng từ api
    // Nếu là khachhang thì navigate qua '/'
    // Nếu là quantri thì navigate qua '/admin'
  }
}

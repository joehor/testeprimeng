import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private auth: AuthService
  ) {
    this.form = fb.group({
      username: ['', [Validators.required]],
      userpass: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onClickEnter() {
    console.log('onClickEnter:');
    console.log('Form valid? ' + this.form.valid);
    console.log('username: ' + this.form.username);
    console.log('userpass: ' + this.form.userpass);
    if (this.form.username && this.form.userpass) {
      this.auth.sendToken(this.form.value.username);
      if (localStorage.getItem('lockUrl') !== 'home') {
        this.route.navigate([localStorage.getItem('lockUrl')]);
      } else {
        this.route.navigate(['home']);
      }
    }
  }

}

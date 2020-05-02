import { Component, OnInit } from '@angular/core';
import { LoginService } from '../global/login.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  constructor(private logService: LoginService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      uname: ['', Validators.required],
      pwd: ['', Validators.required]
    })
  }

  login() {
    this.logService.login(this.loginForm.value);
    this.isSubmitted = !this.isSubmitted;
  }
  
  logged() {
    return this.logService.isLogged();
  }
  
  get controls() {
    return this.loginForm.controls;
  }

}

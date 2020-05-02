import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  regForm: FormGroup;
  @Output() userCreated: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
    this.regForm = this.fb.group({
      gender: ['', Validators.required],
      title: ['', Validators.required],
      fname: ['', Validators.required], 
      lname: ['', Validators.required],
      email: ['', Validators.required],
      uname: ['', Validators.required],
      pwd: ['', Validators.required],
      dob: ['', Validators.required],
      phone: ['', Validators.required] 
    })
  }
  register() {
    const formatObj = {
      gender: this.regForm.value.gender,
      name: this.regForm.value.title + '. ' + this.regForm.value.fname + ' ' + this.regForm.value.lname,
      email: this.regForm.value.email,
      uname: this.regForm.value.uname,
      pwd: this.regForm.value.pwd,
      phone: this.regForm.value.phone,
      dob: new Date(this.regForm.value.dob),
    };
    
    localStorage.setItem('newUser', JSON.stringify(formatObj));
    this.regForm.reset();
    this.userCreated.emit();
  }

  get controls() {
    return this.regForm.controls;
  }

}

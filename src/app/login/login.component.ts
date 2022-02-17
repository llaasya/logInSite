import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {Router } from '@angular/router';
import { User,Role } from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  currentUser!: User;
  currentRole = Role;

  @ViewChild('fform') loginFormDirective: any;

  formErrors:any = {
    'username' : '',
    'password' : ''
  };

  validationMessages:any = {
    'username': {
      'required':      'User Name is required.',
      'minlength':     'User Name must be at least 2 characters long.',
      'maxlength':     'User Name cannot be more than 25 characters long.'
    },
    'password': {
      'required':      'Password is required.',
      'minlength':     'Password must be at least 6 characters long.'
    }
  
  };

  constructor(private fb: FormBuilder, private route:Router ) { 
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm() {
    this.loginForm = this.fb.group({
      username:['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      password:['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
    }
    );

    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    
    this.onValueChanged();
    }


    onValueChanged(data?: any) {
      if (!this.loginForm) { return; }
      const form = this.loginForm;
      for (const field in this.formErrors) {
        if (this.formErrors.hasOwnProperty(field)) {
          // clear previous error message (if any)
            this.formErrors[field]='';
          const control = form.get(field);
          if (control && control.dirty && !control.valid) {
            const messages = this.validationMessages[field];
            for (const key in control.errors) {
              if (control.errors.hasOwnProperty(key)) {
                this.formErrors[field] += messages[key] + ' ';
              }
            }
          }
        }
      }
    }


  onSubmit() {
    this.currentUser = this.loginForm.value;
    console.log(this.currentUser);
    this.loginForm.reset();
  }

}

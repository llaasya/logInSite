import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  newUserForm!: FormGroup;
  currentUser!: any;

  @ViewChild('fform') newUserFormDirective: any;

  formErrors:any = {
    'firstname' : '',
    'lastname' : '',
    'username' : '',
    'email' : '',
    'password' : '',
  };

  validationMessages:any = {
    'firstname':{
      'required': 'First Name is required.'
    },
    'lastname':{
      'required': 'Last Name is required.'
    },
    'username': {
      'required':      'User Name is required.',
      'minlength':     'User Name must be at least 2 characters long.',
      'maxlength':     'User Name cannot be more than 25 characters long.'
    },
    'email':{
      'required': 'Email is required.'
    },
    'password': {
      'required':      'Password is required.',
      'minlength':     'Password must be at least 6 characters long.'
    },
  
  };

  constructor(private fb: FormBuilder, private route:Router , private dataService:DataService) { 
    this.createForm();
   
  }

  ngOnInit(): void {
  }
  createForm() {
    this.newUserForm = this.fb.group({
      firstname:['', [Validators.required]],
      lastname:['', [Validators.required]],
      username:['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
      role:''
    }
    );
    this.newUserForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
}
onValueChanged(data?: any) {
  if (!this.newUserForm) { return; }
  const form = this.newUserForm;
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
  this.currentUser = this.newUserForm.value;
  console.log(this.currentUser);
  this.dataService.setOption('firstname', this.currentUser.firstname);
  this.dataService.setOption('lastname', this.currentUser.lastname);
  this.dataService.setOption('username', this.currentUser.username);
  this.dataService.setOption('password', this.currentUser.password);
  this.dataService.setOption('email', this.currentUser.email);
  this.dataService.setOption('role', this.currentUser.role);
  this.route.navigate(['dispUser'])
  this.newUserForm.reset();
}
}

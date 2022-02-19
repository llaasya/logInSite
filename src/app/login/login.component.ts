import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {Router } from '@angular/router';
import { User,Role} from '../shared/user';
import { NewUser } from '../shared/newUser';
import userdata from '../../assets/json/userdata.json';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userList:{firstname:string,lastname:string,username:string,password:string,email:string,role:string}[]=userdata;
  loginForm!: FormGroup;
  currentUser!: User;
  currentRole = Role;
  valid!: boolean;
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

  constructor(private fb: FormBuilder, private route:Router, private dataService:DataService ) { 
    this.createForm();
    this.dataService.setOption('userList', this.userList);
    console.log(this.userList);
  }

  ngOnInit(): void {
  }
  createForm() {
    this.valid=true;
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
    for( const attr in this.userList)
    {
      console.log(this.userList[attr]);
      const control=this.userList
      if(this.userList[attr].username == this.currentUser.username)
      {
        if(this.userList[attr].password == this.currentUser.password)
        {
          if(this.userList[attr].role=="admin")
          {
         console.log("VALID DATA and ADMIN");
         this.route.navigate(['newUser']);
        }
        else
        {
          console.log("VALID DATA and USER");
         this.route.navigateByUrl("www.google.co.in/");
        }
      }
    }
      else
      {
        this.valid=false;
      }
    
  }

    console.log(this.currentUser);
    this.loginForm.reset();
  }

}

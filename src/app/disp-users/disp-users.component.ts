import { Component, OnInit,Input } from '@angular/core';
import userdata from '../../assets/json/userdata.json';
import { NewUser } from '../shared/newUser';

@Component({
  selector: 'app-disp-users',
  template:`Say{{newUserDet}}`,
  templateUrl: './disp-users.component.html',
  styleUrls: ['./disp-users.component.scss']
})
export class DispUsersComponent implements OnInit {
  @Input() newUserDet: any;
  public userList: {firstname:string, lastname:string,username:string,password:string,email:string,role:string}[]=userdata;
  constructor() { 
    // this.userList.push(this.newUserDet.firstname,this.newUserDet.lastname,this.newUserDet.username,this.newUserDet.email,this.newUserDet.password,this.newUserDet.role);
    
  }

  ngOnInit(): void {
    
  }

}

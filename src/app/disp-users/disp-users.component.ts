import { Component, OnInit} from '@angular/core';
import userdata from '../../assets/json/userdata.json';
import { DataService } from '../services/data.service';
import { NewUser } from '../shared/newUser';

@Component({
  selector: 'app-disp-users',
  templateUrl: './disp-users.component.html',
  styleUrls: ['./disp-users.component.scss']
})
export class DispUsersComponent implements OnInit {
  public data: any;

  constructor(private dataService: DataService) { 
    this.data=dataService.getOption();
    // this.newUser.firstname=this.data.firstname;
    // this.newUser.lastname=this.data.lastname;
    // this.newUser.username=this.data.username;
    // this.newUser.email=this.data.email;
    // this.newUser.password=this.data.password;
    // this.newUser.role=this.data.role;
    this.data.userList.push({'firstname':this.data.firstname,'lastname':this.data.lastname,'username':this.data.username,
    'password':this.data.password,'email':this.data.email,'role':this.data.role,});  
    dataService.setOption('userList', this.data.userList);
    console.log(this.data.userList);
  }

  ngOnInit(): void { 
  }

}

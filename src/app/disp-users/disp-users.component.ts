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
  selectedUser!:any;
  detailsSection!:boolean;

  constructor(private dataService: DataService) { 
    this.detailsSection=true;
    this.data=dataService.getOption();
    this.selectedUser={'firstname':this.data.firstname,'lastname':this.data.lastname,'username':this.data.username,
    'password':this.data.password,'email':this.data.email,'role':this.data.role,};
    this.data.userList.push(this.selectedUser);  

    dataService.setOption('userList', this.data.userList);

    console.log(this.data.userList);
  }
  
  public setSelectedUser(userName:string)
  {
    for(const attr in this.data.userList)
    {
      if(this.data.userList[attr].username == userName)
      {
        this.detailsSection=false;
        this.selectedUser= this.data.userList[attr];
        console.log(this.selectedUser);
      }
    }
  }

  ngOnInit(): void { 
  }

}

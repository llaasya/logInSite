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
    this.data.userList.push(this.data);  
    dataService.setOption('userList', this.data.userList);
    console.log(this.data.userList);
  }

  ngOnInit(): void { 
  }

}

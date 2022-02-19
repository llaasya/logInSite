import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data :any = {};
  setOption(option:string,value:any)
  {
    this.data[option]=value;
  }
  getOption()
  {
    console.log(this.data);
    return this.data;
  }

  constructor() { }
}

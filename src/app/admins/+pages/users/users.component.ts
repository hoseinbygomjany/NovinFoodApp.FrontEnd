import { Component } from '@angular/core';
import { DataGridColumn } from 'src/app/shared/data-grid/data-grid-column';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  columns: DataGridColumn[] = [
    {
      field: 'userType',
      title: 'نوع',
      type:'text'
    }
    ,
    {
      field: 'fullname',
      title: 'نام نام خانوادگی',
      type:'text'
    }
    ,
    {
      field: 'username',
      title: 'ناک کاربری',
      type:'text'
    }
    ,
    {
      field: 'password',
      title: 'رمزعبور',
      type:'text'
    }
    ,
    {
      field: 'verified',
      title: 'وضعیت',
      type:'check'
    }
  ];
  edit(edit:any){
    console.log(edit);
  }
  remove(remove:any){
    console.log(remove);
  }

}

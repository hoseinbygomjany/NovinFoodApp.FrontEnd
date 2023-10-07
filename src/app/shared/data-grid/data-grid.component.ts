import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { DataGridColumn } from './data-grid-column';
import {MatCheckboxModule} from '@angular/material/checkbox';



@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [CommonModule, HttpClientModule,MatButtonModule,MatCheckboxModule],
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  data: any[] = [];
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.http.post(this.datasource,{}).subscribe(resulat => {
      this.data=resulat as any[];
    });
  }
  @Input() datasource: string = '';
  @Input() columns:DataGridColumn[]=[];
}

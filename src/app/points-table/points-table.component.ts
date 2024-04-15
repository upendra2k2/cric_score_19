import { Component,OnInit } from '@angular/core';
import {ApiCallService} from '../api-call.service';

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css']
})
export class PointsTableComponent implements OnInit{

  points:any;
  tableHeading:any;
  constructor(private api:ApiCallService){}

  ngOnInit():void{
    this.api.getPointsTable().subscribe({next:data=>{
      this.points=data;
      this.tableHeading=this.points[0];
    },
    error:error=>{console.log(error);
    }
  })
  }
}

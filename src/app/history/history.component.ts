import { Component,OnInit } from '@angular/core';
import {ApiCallService} from '../api-call.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{
  allMatches:any;
  constructor(private api: ApiCallService){}

  ngOnInit(){
    this.api.getAllMatches().subscribe({next:data=>
    {
      this.allMatches=data;
    },
    error:error=>{
      console.log(error);
    }
  })
  }

}

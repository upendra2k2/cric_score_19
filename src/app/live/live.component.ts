import { Component,OnInit } from '@angular/core';
import {ApiCallService} from '../api-call.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit{

  liveMat:any=[];
  constructor(private api:ApiCallService){}

  ngOnInit():void{
    this.api.getLiveMatches().subscribe({next:data=>{
      this.liveMat=data;
    },
    error:error=>{console.log(error);}


    })
  }
}

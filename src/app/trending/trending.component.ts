import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent {
  allData:any[] = [];
  test:string = ''
  constructor(private _ApiService:ApiService){
    this._ApiService.getTrending().subscribe((data)=>{
      this.allData = data.results
      
    })
  }
}

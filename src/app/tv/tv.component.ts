import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  allData:any[] = [];
  test:string = ''
  constructor(private _ApiService:ApiService){
    this._ApiService.getTv().subscribe((data)=>{
      console.log(data);
      
      this.allData = data.results
      
    })
  }
}

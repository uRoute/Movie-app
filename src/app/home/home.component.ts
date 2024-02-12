import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allData:any[] = [];
  test:string = ''
  constructor(private _ApiService:ApiService){
    this._ApiService.getAll().subscribe((data)=>{
      this.allData = data.results
      
    })
  }
}

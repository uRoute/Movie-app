import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers:any={
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGE0NWMyMzcyOTVmMjY1MjVhOGRhMDFkYmY5ZTc1YSIsInN1YiI6IjY1YzllY2IxY2U2YzRjMDE0OWI5ZTVmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oZN_czlbHZA8QalIC31UBGTupjmCKbdiFoCeYBUdo6c'
  }
  constructor(private _HttpClient:HttpClient) { 

  }
  getAll():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,{headers:this.headers})
  }
  getTrending():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US',{headers:this.headers})
  }
  getTv():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/day?language=en-US',{headers:this.headers})
  }

}

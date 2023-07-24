import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  homeUrl = "https://mnm.truestreamz.com/api/v1/musicnepal/home";


  constructor(private http:HttpClient) { }



  bannerImage():Observable<any[]> {
    return this.http.get<any[]>(this.homeUrl);
  }

}

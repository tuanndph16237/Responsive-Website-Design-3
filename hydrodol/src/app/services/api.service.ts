import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://631b0f25dc236c0b1eeb7d92.mockapi.io/hydrodol")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

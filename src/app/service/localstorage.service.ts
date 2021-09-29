import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  set(key : any, value : any) : void{
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  get(key : string) {
    var result = localStorage.getItem(key);
    if(result){
      result = JSON.parse(result);
    }
    return result;
  }
  
  remove(key : string) :  void{
    localStorage.removeItem(key);
  }
}

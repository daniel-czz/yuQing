import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  get(apiUrl: string){
    return new Promise((resolve, reject) => {
    
    axios.get(apiUrl)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error)
        console.log(error);
      })
      
    });
    
  }

  post(apiUrl: string, data: any){
    return new Promise((resolve, reject) => { //promise 回调函数
      axios.post(apiUrl, data) //axios 
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error)
        console.log(error);
      })
    });
  }
}

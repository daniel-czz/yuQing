import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  get(apiUrl: string, config?: any){
    if (arguments.length== 2){
      return new Promise((resolve, reject) => {
        axios.get(apiUrl, config)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            reject(error)
            console.log(error);
          })
    });

    }else if(arguments.length== 1){
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
    
   }else{
     return new Promise((resolve, reject)=> {
       reject("parameter error -- 参数错误")
     })
   }
    
    
  }

  post(apiUrl: string, data: any, config?: any){
    if( arguments.length == 3){
      return new Promise((resolve, reject) => { //promise 回调函数
      axios.post(apiUrl, data, config) //axios 
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error)
        console.log(error);
      })
    });

    }else if(arguments.length == 2){
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

    }else{
      return new Promise((resolve, reject)=> {
       reject("parameter error -- 参数错误")
     })
    }
    
  }
}

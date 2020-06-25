import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }


  testA(): Promise<number[]> {
    return new Promise(res => setTimeout(() => res([1, 2]), 1000));
  }
  
  testB(): Promise<number[]> {
    return new Promise(res => setTimeout(() => res([3, 4]) , 1000));
  }
}

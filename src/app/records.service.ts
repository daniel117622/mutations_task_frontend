import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Adam Taylor","E234","AT234@gmail.com"]
  info2: string[] = ["Mike Tysom","E238","AT238@gmail.com"]
  info3: string[] = ["Jhon Smith","E236","AT236@gmail.com"]

  getinfo1() : string[]
  {
    return this.info1
  }
  getinfo2() : string[]
  {
    return this.info2
  }
  getinfo3() : string[]
  {
    return this.info3
  }
  constructor() { }
}

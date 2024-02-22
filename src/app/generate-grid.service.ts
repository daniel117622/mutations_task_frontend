import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new Subject<{ x: number; y: number }>();
  private buildGridTrigger = new Subject<void>();

  sendData(x: number, y: number) {
    this.dataSubject.next({ x, y });
  }

  getData() {
    return this.dataSubject.asObservable();
  }

  triggerBuildGrid() {
    this.buildGridTrigger.next();
  }

  getBuildGridTrigger() {
    return this.buildGridTrigger.asObservable();
  }

}

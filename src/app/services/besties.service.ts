import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BestiesService {
  bestieSelected = new EventEmitter(); 

  constructor() { }
}

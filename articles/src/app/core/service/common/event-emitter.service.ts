import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';  

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeGetArticaltion = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  getArticle(article) {    
    this.invokeGetArticaltion.emit(article);    
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  addUser(nom: string){
    this.users.next(this.users.getValue().concat([nom]));
  }
  
  constructor() {
   }
}

    //this.users = new BehaviorSubject([nom]);
    //new BehaviorSubject([nom]);
    //this.users.next([nom]);
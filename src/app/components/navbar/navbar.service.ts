import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class NavBarService {

  private subject = new Subject<any>();
 
    sendMessage(message: string) {
        this.subject.next( message );
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

}

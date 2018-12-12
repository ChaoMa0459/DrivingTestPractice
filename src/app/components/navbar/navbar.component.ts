 /* import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  opened = true;
  events = [];
  constructor(){}
  oninit(){}
}
*/

 import { Component, Input } from '@angular/core';
 import {ChangeDetectorRef, OnDestroy, OnInit} from '@angular/core';
 import {MediaMatcher} from '@angular/cdk/layout';


 @Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.scss']
 })
 export class NavbarComponent implements OnDestroy, OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  @Input() username: string;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    console.log("navbar username ", this.username);
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}

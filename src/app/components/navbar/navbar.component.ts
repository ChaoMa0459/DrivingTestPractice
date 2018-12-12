 import { Component, Input } from '@angular/core';
 import {ChangeDetectorRef, OnDestroy, OnInit} from '@angular/core';
 import {MediaMatcher} from '@angular/cdk/layout';
 import { NavBarService } from '../navbar/navbar.service';
 import { Subscription } from 'rxjs';




 @Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.scss']
 })
 export class NavbarComponent implements OnDestroy, OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  username: string;
  subscription: Subscription;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public navBarService: NavBarService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.subscription = this.navBarService.getMessage()
    .subscribe(message => { this.username = message; console.log("navbar username ", this.username);});
  }

  ngOnInit() {
      console.log("navbar username ", this.username);
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}

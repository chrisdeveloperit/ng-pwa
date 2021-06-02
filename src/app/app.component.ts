import { Component } from '@angular/core';
declare const showClock: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPWA';
  showclock = false;
  onClick(): void {
    this.showclock = ! this.showclock;
   // console.log('SHOW CLOCK', this.showclock);
    if (this.showclock) {
      setTimeout (() => {
        showClock();
        }, 250);
       }
  }
}

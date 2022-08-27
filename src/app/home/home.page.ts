import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options: InAppBrowserOptions = {
    fullscreen: 'yes',
    zoom: 'no',
    location: 'yes',
    toolbar: 'yes',
    hideurlbar: 'yes',
    closebuttoncaption: 'Đóng',
    hidenavigationbuttons: 'yes',

  };
  constructor(
    private router: Router,
    private inAppBrowser: InAppBrowser,
  ) {
    // Browser.addListener('browserFinished', ()=>{
    //   console.log('browserFinished')
    //   this.router.navigateByUrl('splash')
    // })
  }
  ngOnInit() {
    this.openBrowser()
  }
  async openBrowser() {

    this.inAppBrowser.create('http://erashop.vn/', '_self', {
      location: 'no', hideurlbar: 'yes',
      closebuttoncaption: 'Đóng',
      hidenavigationbuttons: 'yes',
    })
  }
}

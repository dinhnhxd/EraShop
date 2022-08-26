import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  ngOnInit() {
    this.openBrowser()
  }
  async openBrowser(){
    console.log('onclick');
    await Browser.open({ url: 'http://erashop.vn/' });
    Browser.addListener('browserFinished', ()=>{
      console.log('browserFinished')
    })
  }
}

import { Component } from '@angular/core';
// import {IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {IonicModule} from '@ionic/angular'
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {
  constructor(private router : Router) {}

  logo = {src: "assets/KAD_logo"};
  

  email = "knotyandezigns1@gmail.com";
  number= "1 (758) 729 - 8930";

  gotoTab2(){
    this.router.navigate(['/tabs/tab2'])
  }

  gotoTab3(){
    this.router.navigate(['/tabs/tab3'])
  }
}

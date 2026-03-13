/* The Tab2Page class in an Angular application contains an array of product objects with image,
description, and price properties. */
import { Component } from '@angular/core';
// import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {IonicModule} from '@ionic/angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonicModule, ExploreContainerComponent]
})
export class Tab2Page {

  constructor(private router:Router) {}

  products= [{img:"assets/prodpics/IMG_1199.jpg", description:"Resin heart keychains", price: "$10.00CAD"},
    {img:"assets/prodpics/IMG_1193.jpg", description:"Glow in the dark resin shaker keychains", price: "$17.00CAD"},
  {img:"assets/prodpics/IMG_1178.jpg", description:"Initial resin keychains", price: "$15.00CAD"},
  {img:"assets/prodpics/IMG_1175.jpg", description:"Mini resin bear keychains", price: "$10.00CAD"},
  {img:"assets/prodpics/IMG_1195.jpg", description:"Bunny resin keychains", price: "$20.00CAD"},
  {img:"assets/prodpics/IMG_1204.jpg", description:"Circular abstract flower resin keychains", price: "$15.00CAD"}
  ]

  goToReview(){
    console.log("moving to tab 3")
    this.router.navigate(['/tabs/tab3'])
  }


}

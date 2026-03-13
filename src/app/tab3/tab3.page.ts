import { Component } from '@angular/core';
//import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {IonicModule} from '@ionic/angular'
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {FormGroup,FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms';
import { Review } from '../review';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, ExploreContainerComponent],
})
export class Tab3Page {
  constructor(private formbuild: FormBuilder, private reviewServ : Review) {}

  reviewForm!:FormGroup;
  list= [1,2,3,4,5];
  rName:any; rating:any; review:any; 
  reviews: any[] = [];

  ngOnInit(){
    this.reviewForm = this.formbuild.group({
  rName: ['',Validators.required],
  rating:[null,Validators.required],
  review: ['',Validators.required]
  });

  this.reviews = this.reviewServ.getReviews();
  }

  onSubmit(){
    if(this.reviewForm.valid){
    let newReview= {...this.reviewForm.value,
      date: new Date()
    }
  }
  }
}

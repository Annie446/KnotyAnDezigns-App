import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Review {
  private Store_Key = 'reviews';

  getReviews(): any[]{
    return JSON.parse(localStorage.getItem(this.Store_Key) || '[]')
  }

  addReview(review:any){
    const reviews= this.getReviews();
    //adding new review to the top
    reviews.unshift(review);
    //adding the item
    localStorage.setItem(this.Store_Key, JSON.stringify(reviews));
  }
  
}

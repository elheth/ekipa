import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../services/challenges.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Challenge } from '../challenge.model';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css'],
})
export class ChallengeComponent implements OnInit {
  challenges$: Observable<any>;
  favoritList: number[] = [];

  constructor(
    private _challengesService: ChallengesService,
    private router: Router
  ) {
    // get the localstorage
    this.favoritList = JSON.parse(localStorage.getItem('favoritList')) || [];
  }

  ngOnInit(): void {
    this.challenges$ = this._challengesService.getChallenges();
  }

  onShow(c: Challenge, index: number) {
    //console.log(c);
    this._challengesService.setChallenge([c]);
    this.router.navigate(['/details', index]);
  }

  enableWish(index: number) {
    if (!this.favoritList.includes(index)) {
      this.favoritList.push(index);
      //console.log(index);
    } else {
      const myIndex = this.favoritList.indexOf(index);
      console.log(myIndex);
      if (myIndex > -1) {
        this.favoritList.splice(myIndex, 1);
      }
    }

    // set the localstorage with key favoritlist and the value of the favoritlist array
    localStorage.setItem('favoritList', JSON.stringify(this.favoritList));
    console.log(this.favoritList);
    console.log(localStorage.getItem('favoritList'));
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ChallengesService } from '../services/challenges.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-challenge-details',
  templateUrl: './challenge-details.component.html',
  styleUrls: ['./challenge-details.component.css'],
})
export class ChallengeDetailsComponent implements OnInit {
  currentChallenge: any;
  favoritList = [];
  routeIndex: number;
  constructor(
    private _challengesService: ChallengesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.favoritList = JSON.parse(localStorage.getItem('favoritList')) || [];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.routeIndex = +paramMap.get('index');
      console.log(this.routeIndex);
      if (this.favoritList.includes(this.routeIndex)) {
        console.log('it is favorit');
      } else {
        console.log('it is not favorit');
      }
    });

    this._challengesService.Challenge$.subscribe((response) => {
      this.currentChallenge = response;
    });
  }

  enableWish(index: number) {
    index = this.routeIndex;
    if (!this.favoritList.includes(index)) {
      this.favoritList.push(index);
    } else {
      const myIndex = this.favoritList.indexOf(index);
      console.log(myIndex);
      if (myIndex > -1) {
        this.favoritList.splice(myIndex, 1);
      }
    }
    localStorage.setItem('favoritList', JSON.stringify(this.favoritList));
  }

  onBack() {
    this.router.navigate(['/']);
  }
}

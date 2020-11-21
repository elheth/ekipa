import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChallengesService } from './services/challenges.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   /* challenges$: Observable<any>;
  constructor(private challengesService: ChallengesService) {
    this.challenges$ = this.challengesService.getChallenges();
  } */


}

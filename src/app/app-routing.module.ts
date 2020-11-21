import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengeDetailsComponent } from './challenge-details/challenge-details.component';
import { ChallengeComponent } from './challenge/challenge.component';

const routes: Routes = [
  {path: '', component:ChallengeComponent},
  {path: 'details/:index', component:ChallengeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Challenge } from '../challenge.model';

const GET_CHALLENGES = gql`
{
  allChallenges{
    edges {
      node {
				title
        teaser
        logo
      }
    }
  }
}
`;


@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  private challengeSource = new BehaviorSubject<Challenge[]>([])
  Challenge$ = this.challengeSource.asObservable();

  constructor(private apollo: Apollo) { }

  setChallenge(challenge: Challenge[]) {
    this.challengeSource.next(challenge)
  }

  getChallenges(): Observable<ApolloQueryResult<any>> {
    return this.apollo
      .watchQuery({
        query: GET_CHALLENGES,
      })
      .valueChanges
      .pipe(map(result => {
        if (result.data) {
          return (result.data as any).allChallenges.edges;
        }
      }));
  }
}

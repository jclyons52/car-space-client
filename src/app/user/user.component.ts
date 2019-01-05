import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular-boost';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { UserQuery, UserQuery_user, UserQueryVariables } from '../types/UserQuery';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userObs: Observable<UserQuery_user>;

  loaded = false;

  userQuery = gql`
    query UserQuery($id: Int!) {
        user(id: $id) {
          name
          userName
          carSpaces {
            address
            bookings {
              start
              end
              user {
                name
              }
            }
          }
          bookings {
            start
            end
            carSpace {
              address
            }
            user {
              name
            }
          }
        }
    }
  `;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apollo: Apollo
    ) {}

  ngOnInit() {
    this.getUser();
  }


  private async getUser() {
      this.userObs = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {
          return this.apollo.watchQuery<UserQuery, UserQueryVariables>({
             query: this.userQuery,
              variables: { id: Number(params.get('id')) }
            }).valueChanges.pipe(
            map(res => res.data.user)
          );
        })
      );
  }
}

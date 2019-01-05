import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular-boost';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { registerVariables } from '../types/register';
import { UsersQuery_users, UsersQuery } from '../types/UsersQuery';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Observable<UsersQuery_users[]>;
  usersQuery = gql`
    query UsersQuery {
      users {
        id,
        name
      }
    }
  `;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.users = this.apollo.watchQuery<UsersQuery>({
      query: this.usersQuery
    }).valueChanges.pipe(map(res => res.data.users));
  }

  addUser(variables: registerVariables) {
    this.apollo.mutate<any, registerVariables>({
      mutation: gql`
         mutation register($name: String!,  $userName: String!, $email: String!, $password: String!) {
          register(name: $name, userName: $userName, email: $email, password: $password) {
            id
          }
        }
      `,
      variables
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular-boost';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<any>({
      query: gql`
        query users {

        }
      `
    });
  }

}

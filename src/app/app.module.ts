import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ApolloBoostModule, ApolloBoost} from 'apollo-angular-boost';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { appRoutes } from './routes';
import { CarSpacesComponent } from './car-spaces/car-spaces.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    UserComponent,
    UsersComponent,
    CarSpacesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    HttpClientModule,
    ApolloBoostModule,
    HttpLinkModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apolloBoost: ApolloBoost) {
    apolloBoost.create({
      uri: 'http://localhost:4000/graphql',
    });
  }
}

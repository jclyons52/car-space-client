/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserQuery
// ====================================================

export interface UserQuery_user_carSpaces_bookings_user {
  name: string;
}

export interface UserQuery_user_carSpaces_bookings {
  start: any;
  end: any;
  user: UserQuery_user_carSpaces_bookings_user;
}

export interface UserQuery_user_carSpaces {
  address: string;
  bookings: (UserQuery_user_carSpaces_bookings | null)[] | null;
}

export interface UserQuery_user_bookings_carSpace {
  address: string;
}

export interface UserQuery_user_bookings_user {
  name: string;
}

export interface UserQuery_user_bookings {
  start: any;
  end: any;
  carSpace: UserQuery_user_bookings_carSpace;
  user: UserQuery_user_bookings_user;
}

export interface UserQuery_user {
  name: string;
  userName: string;
  carSpaces: (UserQuery_user_carSpaces | null)[] | null;
  bookings: (UserQuery_user_bookings | null)[] | null;
}

export interface UserQuery {
  user: UserQuery_user | null;
}

export interface UserQueryVariables {
  id: number;
}

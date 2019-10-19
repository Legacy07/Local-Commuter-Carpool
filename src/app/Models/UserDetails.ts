"use strict";

export interface IUserDetails {
    Id: string;
    Username: string;
    Name: string;
    DateJoined: string;
}

export class UserDetails implements IUserDetails {
    constructor(
        public Id: string,
        public Username: string,
        public Name: string,
        public DateJoined: string
    ) {
    }

    public static defaultInstance(): UserDetails {
        return new UserDetails(undefined, undefined, undefined, undefined);
    }
}


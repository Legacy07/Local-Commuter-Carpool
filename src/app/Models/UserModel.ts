"use strict";

export interface IUserModel {
    Id: string;
    Email: string;
    Username: string;
    Password: string;
}

export class UserModel implements IUserModel {
    constructor(
        public Id: string,
        public Email: string,
        public Username: string,
        public Password: string
    ) {
    }

    public static defaultInstance(): UserModel {
        return new UserModel(undefined, undefined, undefined, undefined);
    }
}


"use strict";

export interface IJourneyPost {
    Id: string;
    Purpose: string;
    StartingPoint: string;
    Destination: string;
    Date: string;
}

export class JourneyPost implements IJourneyPost {
    constructor(
        public Id: string,
        public Purpose: string,
        public StartingPoint: string,
        public Destination: string,
        public Date: string
    ) {
    }

    public static defaultInstance(): JourneyPost {
        return new JourneyPost(undefined, undefined, undefined, undefined, undefined);
    }
}
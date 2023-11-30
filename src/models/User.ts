import { Tweet } from "./Tweet";

export abstract class User {
    private static idCounter = 1;

    constructor(
      private id: number,
      public name: string,
      public email: string,
      public username: string,
      public password: string,
      public followers: User[] = [],
      public tweets: Tweet[] = []
    ){}

    get Id(): number {
      return this.id;
    }

    follow(user: User): void {
      if (user !== this && !this.followers.includes(user)) {
        this.followers.push(user);
      }
    }
  }
  
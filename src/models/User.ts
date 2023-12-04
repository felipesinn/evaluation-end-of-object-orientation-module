import { randomUUID } from "crypto";
import { users } from "../data/users";
import { Tweet } from "./Tweet";

export abstract class User {
  private _id: string = randomUUID();
  public followers: User[] = [];
  public tweets: Tweet[] = [];

  constructor(
    public name: string,
    public email: string,
    public username: string,
    public password: string
  ) {
    if (!this.isValidUsername(username)) {
      throw new Error("Invalid user name. Please enter a valid username.");
    }
  }

  private isValidUsername(username: string): boolean {
    const existingUsernames = new Set(users.map((user) => user.username));
    return !existingUsernames.has(username);
  }

  get id(): string {
    return this._id;
  }

  sendTweet(content: string): Tweet {
    const newTweet = new Tweet(content, "normal", this);
    this.tweets.push(newTweet);
    console.log(`Tweet sent.`);
    return newTweet;
  }

  follow(user: User): void {
    if (user !== this && !this.followers.includes(user)) {
      this.followers.push(user);
    }
  }

  showFeed(): void {
    this.followers.forEach((user) => {
      user.tweets.forEach((tweet) => {
        console.log(tweet.displayTweet());
      });
    });
  }

  showTweets(): void {
    this.tweets.forEach((tweet) => {
      console.log(tweet.displayTweet());
    });
  }
}

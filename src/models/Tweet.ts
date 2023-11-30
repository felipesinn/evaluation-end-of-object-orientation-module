import { User } from "./User";

export abstract class Tweet {
    private static idCounter = 1;
  
    private tweetId: number;
    public content: string;
    public type: 'normal' | 'reply';
    public user: User;
  
    constructor(content: string, type: 'normal' | 'reply', user: User) {
      this.tweetId = Tweet.idCounter++;
      this.content = content;
      this.type = type;
      this.user = user;
    }

     get id(): number {
      return this.tweetId;
    }
  }
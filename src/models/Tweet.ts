import { User } from "./User";

export class Tweet {
  private static idCounter = 1;

  private tweetId: number;
  public content: string;
  public type: "normal" | "reply";
  public user: User;
  private likes: User[] = [];
  private replies: Tweet[] = [];

  constructor(content: string, type: "normal" | "reply", user: User) {
    this.tweetId = Tweet.idCounter++;
    this.content = content;
    this.type = type;
    this.user = user;
  }

  get id(): number {
    return this.tweetId;
  }
  tweetAbstractMethod(): void {
    console.log("Implemented abstract method for Tweet.");
  }

  displayTweet(): string {
    const likesString =
      this.likes.length === 0 ? "" : `Likes: ${this.likes.length}`;
    const repliesString =
      this.replies.length === 0 ? "" : `Replies: ${this.replies.length}`;
    return `@${this.user.username}: ${this.content}\n${likesString}\n${repliesString}`;
  }

  like(user: User): void {
    if (!this.likes.includes(user)) {
      this.likes.push(user);
    }
  }

  reply(user: User, replyContent: string): void {
    const replyTweet = new Tweet(replyContent, "reply", user);
    this.replies.push(replyTweet);
  }
}

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
    return
  }

  displayTweet(indentation = ""): string {
    const likesString =
      this.likes.length === 0 ? "" : `Likes: ${this.likes.length}`;

    let tweetString = `${indentation}@${this.user.username}: ${this.content}\n${indentation}${likesString}`;

    if (this.replies.length > 0) {
      const repliesString = this.replies
        .map((reply) => reply.displayTweet(`${indentation}> `))
        .join("\n");
      tweetString += `\n${repliesString}`;
    }

    return tweetString;
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

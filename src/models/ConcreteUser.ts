import { User } from "./User";

export class ConcreteUser extends User {
  someAbstractMethod(): void {}

  follow(user: User): void {
    if (user !== this && !this.followers.includes(user)) {
      this.followers.push(user);
    }
  }
}

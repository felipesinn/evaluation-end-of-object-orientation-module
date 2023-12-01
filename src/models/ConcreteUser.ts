import { User } from "./User";

export class ConcreteUser extends User {
  someAbstractMethod(): void {
    console.log('Implemented abstract method.');
  }

  follow(user: User): void {
    if (user !== this && !this.followers.includes(user)) {
      this.followers.push(user);
    }
  }
}

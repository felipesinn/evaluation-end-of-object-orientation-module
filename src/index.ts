import { User } from "./models/User";
import { Tweet } from "./models/Tweet";

const user = new User('John Doe', 'john@example.com', 'john_doe', 'password123');
const tweet = new Tweet('Hello, World!', 'normal', user);

console.log(tweet)
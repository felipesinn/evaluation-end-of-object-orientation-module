import { ConcreteUser } from "./models/ConcreteUser";
import { User } from "./models/User";
import { Tweet } from "./models/Tweet";

const user1 = new ConcreteUser(1, 'felipe', 'felipe@.com', 'felipe_teste', 'password123');
const user2 = new ConcreteUser(2, 'felipesinn', 'felipesinn2@.com', 'felipesinn_teste', 'password456');
const user3 = new ConcreteUser(2, 'felipesinn', 'felipesinn2@.com', 'felipesinn_teste', 'password456');


const tweet1 = new Tweet("Oi?", "normal", user1);
const tweet2 = new Tweet('Como você está?', 'normal', user3);

tweet1.like(user2);
tweet1.like(user1);
tweet2.like(user1);

tweet1.reply(user2, 'teste!');
tweet1.reply(user1, 'teste');


console.log(tweet1.displayTweet());
console.log(tweet2.displayTweet());
console.log(`Usuário 1: ${user1.name}`);
console.log(`Seguidores de Usuário 1: ${user1.followers.map(f => f.name).join(', ')}`);
console.log(`Tweets de Usuário 1: ${user1.tweets.map(t => t.content).join(', ')}`);
console.log(`Tweets de Usuário 2: ${user2.tweets.map(t => t.content).join(', ')}`);
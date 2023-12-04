
import { ConcreteUser } from "./models/ConcreteUser";
import { Tweet } from "./models/Tweet";

const user1 = new ConcreteUser('felipe', 'felipe', 'felipe@.com', 'felipe_teste');
const user2 = new ConcreteUser('Joao', 'Joao', 'Joao2@.com', 'Joao_teste');

const tweet1 = new Tweet("Oi?", "normal", user1);
const tweet2 = new Tweet('Como você está?', 'normal', user2);

tweet1.like(user1);
tweet2.like(user2);
tweet2.like(user2);

tweet1.reply(user2, 'teste!');
tweet1.reply(user1, 'teste');

console.log(tweet1.displayTweet());
console.log(tweet2.displayTweet());
console.log(`Usuário 1: ${user1.name}`);
console.log(`Seguidores de Usuário 1: ${user1.followers.map(f => f.name).join(', ')}`);
console.log(`Tweets de Usuário 1: ${user1.tweets.map(t => t.content).join(', ')}`);
console.log(`Tweets de Usuário 2: ${user2.tweets.map(t => t.content).join(', ')}`);

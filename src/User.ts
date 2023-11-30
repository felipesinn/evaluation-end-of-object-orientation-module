 export abstract class User{
    constructor(
        private id: string, 
        public name: string, 
        public username: string, 
        public email: string,
        public password: string
        ){}


}
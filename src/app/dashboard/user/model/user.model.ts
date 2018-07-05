export class UserModel {

    constructor(
        public name:        string,
        public lastname:    string,
        public genre:       string,
        public born:        string,
        public email:       string,
        public password:    string,
        public role?:       string,
        public accept?:     boolean,
        public _id?:        string

     ) { }

}

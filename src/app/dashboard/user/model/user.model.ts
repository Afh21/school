export class UserModel {

    constructor(
        
        public name:        string,
        public lastname:    string,
        public genre:       string,
        public born:        string,
        public email:       string,
        public password:    string,
        public rol?:        string,
        public accept?:     boolean,
        public _id?:        string,
        public __v?:        string

     ) { }

}

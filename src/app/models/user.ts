import {ticket} from "./ticket";
import {userrole} from "./userrole";

export class user{


  userId: string;
  username: string;
  password: string;
  userRole: userrole;
  tickets: Set<ticket>;


  constructor(userId:string, username:string, password:string,
              userRole: userrole, tickets: Set<ticket>) {

    userId = this.userId;
    username = this.username;
    password = this.password;
    userRole = this.userRole;
    tickets = this.tickets;


  }


}

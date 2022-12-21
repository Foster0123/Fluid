import { Component } from '@angular/core';
interface ChatInterface {
  id : number
  uname : string,
  status : string,
  profile : string
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent {
  chats : ChatInterface [] = [
    { id: 1, uname:"Something0123", status:"Active Now", profile: "./assets/images/blaze.png" },
    { id: 2, uname:"SomethingElse0123", status:"Active 1hr Ago", profile: "./assets/images/fluid.png" },
    { id: 1, uname:"Something0123", status:"Active Now", profile: "./assets/images/blaze.png" },
    { id: 1, uname:"Something0123", status:"Active Now", profile: "./assets/images/blaze.png" },
    { id: 1, uname:"Something0123", status:"Active Now", profile: "./assets/images/blaze.png" },
    { id: 1, uname:"Something0123", status:"Active Now", profile: "./assets/images/blaze.png" },
    { id: 1, uname:"Something0123", status:"Active Now", profile: "./assets/images/blaze.png" },
    { id: 1, uname:"Something0123", status:"Active Now", profile: "./assets/images/blaze.png" },
    { id: 1, uname:"Something0123", status:"Active Now", profile: "./assets/images/blaze.png" },
    { id: 1, uname:"Something0123", status:"Active Now", profile: "./assets/images/blaze.png" },
    { id: 1, uname:"Something0123", status:"Active Now", profile: "./assets/images/blaze.png" },
    { id: 1, uname:"Something0123", status:"Active Now", profile: "./assets/images/blaze.png" }
  ]
}

import { Component } from '@angular/core';
interface ChatInterface {
  id : number
  uname : string,
  status : string
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent {
  chats : ChatInterface [] = [
    { id: 1, uname:"Something0123", status:"Active Now" },
    { id: 2, uname:"SomethingElse0123", status:"Active 1hr Ago" }
  ]
}

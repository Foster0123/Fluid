import { Component } from '@angular/core';
interface ChatInterface {
  id: number;
  uname: string;
  status: string;
  profile: string;
  showMenu: boolean;
}
@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss'],
})
export class ChatContainerComponent {
  chats: ChatInterface[] = [ 
    {
      id: 0,
      uname: 'Something0123',
      status: 'Active Now',
      profile: './assets/images/blaze.png',
      showMenu:false
    },
    {
      id: 1,
      uname: 'SomethingElse0123',
      status: 'Active 1hr Ago',
      profile: './assets/images/fluid.png',
      showMenu:false
    },
    {
      id: 2,
      uname: 'Something0123',
      status: 'Was Active Just Now',
      profile: './assets/images/blaze.png',
      showMenu:false
    },
    {
      id: 3,
      uname: 'Something0123',
      status: 'Active 1 Min',
      profile: './assets/images/blaze.png',
      showMenu:false
    },
    {
      id: 4,
      uname: 'Something01234',
      status: 'Active Now',
      profile: './assets/images/blaze.png',
      showMenu:false
    },
    {
      id: 5,
      uname: 'Something0123',
      status: 'Active Now',
      profile: './assets/images/blaze.png',
      showMenu:false
    }
  ];
  showChatItemMenu: boolean = false;
  toggleItemMenu(e: any) {
    this.chats[e.id].showMenu = !this.chats[e.id].showMenu;
    console.log(e.id);
  }
}
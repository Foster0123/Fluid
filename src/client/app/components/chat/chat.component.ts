import { Component } from '@angular/core';
interface ChatInterface {
  id: number;
  uname: string;
  status: string;
  profile: string;
  showMenu: boolean;
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
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
    },
    // {
    //   id: 7,
    //   uname: 'Something0123',
    //   status: 'Active Now',
    //   profile: './assets/images/blaze.png',
    // },
    // {
    //   id: 8,
    //   uname: 'Something0123',
    //   status: 'Active Now',
    //   profile: './assets/images/blaze.png',
    // },
    // {
    //   id: 9,
    //   uname: 'Something0123',
    //   status: 'Active Now',
    //   profile: './assets/images/blaze.png',
    // },
    // {
    //   id: 10,
    //   uname: 'Something0123',
    //   status: 'Active Now',
    //   profile: './assets/images/blaze.png',
    // },
    // {
    //   id: 11,
    //   uname: 'Something0123',
    //   status: 'Active Now',
    //   profile: './assets/images/blaze.png',
    // },
    // {
    //   id: 12,
    //   uname: 'Something0123',
    //   status: 'Active Now',
    //   profile: './assets/images/blaze.png',
    // },
  ];
  showChatItemMenu: boolean = false;
  toggleItemMenu(e: any) {
    this.chats[e.id].showMenu = !this.chats[e.id].showMenu;
    console.log(e.id);
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  display = false;
  displayNavbar(){
    if(this.display){
      this.display = false;
    }
    else {
      this.display = true;
    }
  }
}

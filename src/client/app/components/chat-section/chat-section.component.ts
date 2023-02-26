import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.scss']
}) 
export class ChatSectionComponent {
  controlHeight(e: any): any {
    e.style.height = window.innerHeight - 60;
  }
}

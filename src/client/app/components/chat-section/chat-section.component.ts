import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.scss']
}) 
export class ChatSectionComponent {
  msgs = [
    {text: "Something-0", sentByClient:false},
    {text: "Something-1", sentByClient:false},
    {text: "Something-2", sentByClient:true},
    {text: "Something-3", sentByClient:false},
    {text: "Something-4", sentByClient:false},
    {text: "Something-5", sentByClient:false},
    {text: "Something-6", sentByClient:true},
    {text: "Something-7", sentByClient:true},
    {text: "Something-8", sentByClient:false},
    {text: "Something-9", sentByClient:true},
  ]
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatSidebarComponent } from './chat-sidebar/chat-sidebar.component';
import { ChatComponent } from './chat.component';
import { ChatPreviewComponent } from './chat-preview/chat-preview.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ChatComponent,
    ChatSidebarComponent,
    ChatPreviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ChatComponent,
    ChatSidebarComponent,
    ChatPreviewComponent
  ]
})
export class ChatModule { }

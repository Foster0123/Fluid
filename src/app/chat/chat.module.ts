import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatSidebarComponent } from './chat-sidebar/chat-sidebar.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { ChatPreviewComponent } from './chat-preview/chat-preview.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ChatSidebarComponent,
    ChatContainerComponent,
    ChatPreviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ChatSidebarComponent,
    ChatContainerComponent,
    ChatPreviewComponent
  ]
})
export class ChatModule { }

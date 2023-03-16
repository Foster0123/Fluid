import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-chat-section',
    templateUrl: './chat-section.component.html',
    styleUrls: ['./chat-section.component.scss']
}) 
export class ChatSectionComponent implements AfterViewInit {
 
    @ViewChild('msgDiv') msgDiv!: ElementRef;
    @ViewChild('msgArea') msgArea!: ElementRef;
    @ViewChild('msgContainer') msgContainer!: ElementRef;

    ngAfterViewInit(): void {
        this.msgDiv.nativeElement.addEventListener("input", () => {
            this.msgDiv.nativeElement.value = this.msgArea.nativeElement.textContent;
        })
        window.addEventListener('DOMContentLoaded', () => {
            this.msgContainer.nativeElement.style.width = `${this.msgContainer.nativeElement.clientWidth - 50 + "px"}`;
            console.log(this.msgContainer.nativeElement.clientWidth)
        })
        window.addEventListener('resize', () => {
            this.msgContainer.nativeElement.style.width = `${this.msgContainer.nativeElement.clientWidth}`;
            console.log(this.msgContainer.nativeElement.clientWidth)
        })
    }
}
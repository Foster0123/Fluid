import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-chat-sidebar',
    templateUrl: './chat-sidebar.component.html',
    host: {
        ngNoHost: ""
    },
    styleUrls: ['./chat-sidebar.component.scss']
})


export class ChatSidebarComponent implements AfterViewInit {
    @ViewChild('sidebar') sidebar!: ElementRef;
    ngAfterViewInit(): void {}
    toggleSideBar(): any {
        this.sidebar.nativeElement.classList.add("hide-sidebar") 
    }
    chats: any = [
        { id: 1, image: "https://wallpaperaccess.com/full/1122261.jpg", username: "Username", status: "Active Now" },
        { id: 2, image: "https://wallpaperaccess.com/full/1122261.jpg", username: "Username", status: "Active Now" },
        { id: 3, image: "https://wallpaperaccess.com/full/1122261.jpg", username: "Username", status: "Active Now" },
        { id: 4, image: "https://wallpaperaccess.com/full/1122261.jpg", username: "Username", status: "Active Now" },
        { id: 5, image: "https://wallpaperaccess.com/full/1122261.jpg", username: "Username", status: "Active Now" },
        { id: 6, image: "https://wallpaperaccess.com/full/1122261.jpg", username: "Username", status: "Active Now" },
        { id: 7, image: "https://wallpaperaccess.com/full/1122261.jpg", username: "Username", status: "Active Now" },
        { id: 8, image: "https://wallpaperaccess.com/full/1122261.jpg", username: "Username", status: "Active Now" },
        { id: 9, image: "https://wallpaperaccess.com/full/1122261.jpg", username: "Username", status: "Active Now" },
        { id: 10, image: "https://wallpaperaccess.com/full/1122261.jpg", username: "Username", status: "Active Now" },
    ]

}
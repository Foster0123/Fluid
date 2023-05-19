import { Component } from '@angular/core';

@Component({
  selector: 'app-account-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class AccountSidebarComponent {
    sidebarRoutes : any = [
        { name: "Profile", path: "/", icon: "bi bi-person-circle" },
        { name: "Change Password", path: "/change-password", icon: "bi bi-key" },
        { name: "Notifications", path: "/notifications", icon: "bi bi-bell" },
        { name: "Activity", path: "/activity", icon: "bi bi-activity" },
        { name: "Security", path: "/security", icon: "bi bi-shield" },
        { name: "Devices", path: "/devices", icon: "bx bx-devices"},
        { name: "Danger", path: "/danger", icon: "bi bi-exclamation-circle" },

    ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showNavbar() {
    const linkContainer = document.getElementById('navlink-section')
    linkContainer?.classList.toggle('display-navbar')
  }
}

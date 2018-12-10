import { Component, OnInit } from '@angular/core';
// import { UserProfileService } from '../user-profile/user-profile.service';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  constructor() { }
  // private sidenav: UserProfileService ^
  opened: boolean;
  
  toggleSidenav() {
    this.opened = !this.opened;
    // this.sidenav.toggle();

    // console.log(this.opened);
  }

}

import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service:RequestsService) { }
  showMenu:boolean = false;

  ngOnInit(): void {
  }

  openSideNav(){
    this.showMenu = !this.showMenu;
    this.service.toggle();
  }

}

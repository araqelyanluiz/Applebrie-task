import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @ViewChild('sidebar',{static:true}) public sidebar:ElementRef;

  constructor(private service:RequestsService) {}
  
  ngOnInit(): void {
    this.service.sideNavToggleSubject.subscribe(()=> {
      this.sidebar.nativeElement.classList.toggle('hide')
    });
  }

  

}

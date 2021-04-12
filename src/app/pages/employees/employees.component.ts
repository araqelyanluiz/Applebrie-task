import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Employees } from 'src/app/services/models/employees';
import { RequestsService } from 'src/app/services/requests.service';
declare var google: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {


  employees$:Observable<Employees[]>
  displayMaximizable: boolean;

  // Map View
  options: any;
  overlays: Array<any>=[];


  constructor(private service:RequestsService) {
    this.employees$ = this.service.getEmployees().pipe(tap(res=>{
      res.forEach(element => {
        element.fullName = element.name.title+'. '+element.name.first+' '+element.name.last;
        this.overlays.push(
          new google.maps.Marker({position: {lat: +element.location.coordinates.latitude, lng: +element.location.coordinates.longitude}, title:element.fullName}),
        )
        element.fullAddress = element.location.street.number+' '+ element.location.street.name+', '+element.location.city+', '+element.location.country+', '+element.location.postcode
      });
      console.log(res)
    }))
  }

  ngOnInit(): void {
    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 5
    };
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
}

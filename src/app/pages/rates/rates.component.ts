import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {

  currencyList:Array<any>=[]
  rates$:Observable<any>;

  dataForm: FormGroup = this.fb.group({
    from: [null, Validators.required],
    to: [null, Validators.required],
    amount: [0, Validators.required],
    sum:[0]
  })


  constructor(private service:RequestsService,private fb: FormBuilder) {
    this.rates$ = this.service.getRates().pipe(tap(res=>{
      Object.keys(res.quotes).forEach((key) => {
        this.currencyList.push({key:key,name:key.substring(3),value:res.quotes[key]})
      })
    }))
  }
  

  ngOnInit(): void {
  }

  getExchange(){
    if(this.dataForm.invalid){
      return
    }
    console.log(this.dataForm.value)
    this.dataForm.controls.sum.patchValue((this.dataForm.value.to/this.dataForm.value.from)*this.dataForm.value.amount)
  }

}

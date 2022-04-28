import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@aspnet/signalr';
import { SignalrService } from '../signalr.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {

  constructor(private signalService: SignalrService){}

  ngOnInit(): void {
    // this.signalService.getReq().subscribe(
    //   res =>{

    //   }
    // )
  }



  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }



}

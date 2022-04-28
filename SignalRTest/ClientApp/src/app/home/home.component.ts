import { Component, OnInit } from '@angular/core';
import { SignalrService } from '../signalr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  textMessage!: string;
  answer: any[] = [];

  constructor(private signalService: SignalrService){

  }

  ngOnInit(): void {
    // this.signalService.startConnection()
  }


  sendMessage()
  {
    // this.signalService.addData(this.textMessage)
    //   this.signalService.listenerWS()
    //   if(this.signalService.data_new != undefined)
    //   this.answer.push(this.signalService.data_new)
  }
}

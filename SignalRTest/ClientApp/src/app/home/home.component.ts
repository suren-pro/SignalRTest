import { Component, OnInit } from '@angular/core';
import { SignalrService } from '../signalr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private signalService: SignalrService){

  }

  ngOnInit(): void {
    this.signalService.startConnection()
    this.signalService.listenerWS()
    this.signalService.addBroadcastChartDataListener()
  //   let ws = new WebSocket('wss://localhost:5001/ws')
  //   ws.onopen = (data) =>{
  //     console.log(data);
  //   }
  //   ws.onclose = () => {
  //     console.log('closed')
  //   }

  //   ws.onerror = (err) =>
  //   {
  //     console.log(err)
  //   }
  //   ws.onmessage = (obj) =>{
  //     console.log(obj.data)
  //   }
  }
}

import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr'

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  constructor() { }
  hubConnection: signalR.HubConnection;
  count: any;
  audio: any
  orders: any
  oldCount: any;


  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('wss://localhost:44307/orderHub', {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build()

    this.hubConnection
    .start()
    .then(() => {
      console.log('Hub Connection Started')
    })
    .catch(err=>{console.log('err')})
  }

  // addTransferChartDataListener = () => {
  //   this.hubConnection.on('getOrdersCount', (data) => {
  //     this.count=data;
  //     if(this.count !=this.oldCount){
  //       this.audio = new Audio();
  //       this.audio.src = "../../../assets/sound.mp3";
  //       this.audio.load();
  //       this.audio.play();
  //       this.oldCount = this.count;
  //     }
  //     // this.orders = data;
  //     // console.log(data);

  //   });
  // }

  listenerWS = () =>{
    console.log('onListener')
    this.hubConnection.on('ws', (data) => {
      console.log(data)
    })
  }

  public broadcastChartData = () => {
    this.hubConnection.invoke('broadcastchartdata', this.orders)
    .catch(err => console.error(err));
  }
  public addBroadcastChartDataListener = () => {
    this.hubConnection.on('broadcastchartdata', (data) => {
      this.orders = data;
      console.log(this.orders);

    })
  }

}

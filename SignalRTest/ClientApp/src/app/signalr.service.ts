import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@aspnet/signalr';
import * as signalR from '@microsoft/signalr'
// import * as signalR from '@aspnet/signalr'

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  constructor(private http: HttpClient) {

  }

  hubConnection!: signalR.HubConnection;
  data_new: any;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('https://localhost:44307/orderHub')
                            .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err: any) => console.log('Error while starting connection: ' + err))
  }

  addData = (msg:string) => {
    this.hubConnection.invoke('join', msg)
    .then(() => console.log('ok'))
    .catch((err:any)=>{'error'})
  }

  listenerWS = () =>{
    this.hubConnection.on('sendNotification', (data:any) => {
    this.data_new =  data
    })
  }


  getReq()
  {
    return this.http.get('https://localhost:44307/ws')
  }


}

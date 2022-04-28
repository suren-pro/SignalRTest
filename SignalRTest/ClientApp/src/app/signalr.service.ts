import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr'
// import * as signalR from '@aspnet/signalr'
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  constructor(private http: HttpClient, private notifyService: NotificationService) {

  }

  hubConnection!: signalR.HubConnection;
  data_new: any = 'First';

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('https://localhost:44307/orderHub', {accessTokenFactory: ()=> 'barevaper'})
                            .withAutomaticReconnect()
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
    this.hubConnection.on('sendNotification', (data)=>{
    // this.notifyService.getPermission()
    this.notifyService.sendNotification(data)
    })
  }



}

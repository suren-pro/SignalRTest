import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { SignalrService } from '../signalr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private signalService: SignalrService, private notifyService: NotificationService){

  }

  ngOnInit(): void {
    this.signalService.startConnection()

    this.signalService.listenerWS()
    this.notifyService.getPermission()
    setTimeout(() => {
      this.signalService.addData('123')

    }, 2000);
  }
}

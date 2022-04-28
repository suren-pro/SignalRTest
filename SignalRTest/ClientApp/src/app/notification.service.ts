import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

constructor() { }

  getPermission()
  {
    if(Notification.permission != 'granted')
      Notification.requestPermission()
  }

  sendNotification(data)
  {
    const greeting = new Notification(data['message'], {
      body: "data['body']",
      image: 'https://images.pexels.com/photos/11592902/pexels-photo-11592902.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });

    greeting.addEventListener('click', ()=>{
        window.open('https://localhost:44307/counter')
      })
  }
}

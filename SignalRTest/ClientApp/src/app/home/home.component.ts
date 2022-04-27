import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    let ws = new WebSocket('wss://localhost:5001/ws')
    ws.onopen = (data) =>{
      console.log(data);
    }
    ws.onclose = () => {
      console.log('closed')
    }

    ws.onerror = (err) =>
    {
      console.log(err)
    }
    ws.onmessage = (obj) =>{
      console.log(obj.data)
    }
  }
}

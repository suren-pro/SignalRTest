import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  public currentCount = 0;
  constructor(private http: HttpClient){}

  ngOnInit(): void {
      this.http.get('https://localhost:44307/ws').subscribe(
        res =>{

        }
      )
  }

  public incrementCounter() {
    this.currentCount++;
  }
}

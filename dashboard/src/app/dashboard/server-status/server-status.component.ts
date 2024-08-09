import { Component, DestroyRef, inject, Input, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host: {
    class: 'status'
  }
})
export class ServerStatusComponent implements OnInit {

  currentStatus: 'online' | 'offline' | 'unkown' = 'offline';
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();
      if(rnd <0.5) {
        this.currentStatus = 'online';
      } else if(rnd <0.9) {
        this.currentStatus= 'offline';
      } else {
        this.currentStatus = 'unkown';
      }
    }, 3000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }
 
}

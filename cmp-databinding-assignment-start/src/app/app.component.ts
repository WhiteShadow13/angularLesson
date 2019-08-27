import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  getNumber(event: {type: string, nbr: number}) {
    event.type === 'odd' ? this.oddNumbers.push(event.nbr) : this.evenNumbers.push(event.nbr);
  }
}

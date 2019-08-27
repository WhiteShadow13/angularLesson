import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  num: number = 0;
  private intervalId: number;
  @Output('numberGenerate') numberGenerate = new EventEmitter<{type: string, nbr: number}>();

  constructor() { }

  ngOnInit() {
  }

  onGenerateNumber() {
    this.intervalId = window.setInterval(() => {
      this.num += 1;
      
      if (this.num % 2 === 0) {
        this.numberGenerate.emit({
          type: "even", 
          nbr: this.num
        });
      } else {
        this.numberGenerate.emit({
          type: "odd", 
          nbr: this.num
        });
      }
      
    }, 1000);
  }

  onStopNumber() {
    window.clearInterval(this.intervalId);
  }
}

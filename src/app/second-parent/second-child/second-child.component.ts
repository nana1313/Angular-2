import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})

export class SecondChildComponent implements OnInit {
  @Input()  name!: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;
  constructor() { }

  ngOnInit(): void {
  }
  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }
  }
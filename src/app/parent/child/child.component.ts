import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() minor!: number;
  @Input() major!: number;
  changeLog: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    let log: string[] = [];
    for(const change in changes) {
      let prevValue = changes[change]?.previousValue;
      let currValue = changes[change]?.currentValue;
      if(changes[change]?.isFirstChange()) {
        log.push(`Initial value of ${change} set to ${currValue}`);
      }else  {
        log.push(`${change} changed from ${prevValue} to ${currValue}`)
      }
    }
    this.changeLog.push(log.join(', '));
    console.log(this.changeLog);
  }
}
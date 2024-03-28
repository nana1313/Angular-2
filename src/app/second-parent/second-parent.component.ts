import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-parent',
  templateUrl: './second-parent.component.html',
  styleUrls: ['./second-parent.component.scss']
})

export class SecondParentComponent implements OnInit {
  agreed: number = 0;
  disagreed: number = 0;
  voters = ['Yes,Earth Is Flat :', 'No,Earth Is Not Flat :', 'I Do Not Know :'];
  constructor() { }

  ngOnInit(): void {
  }
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
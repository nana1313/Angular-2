import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  major = 1;
  minor = 23;

  constructor() { }

  ngOnInit(): void {
  }
  updateMinor() {
    this.minor += 1;
  }
  updateMajor() {
    this.major += 1;
    this.minor = 0;
  }
}
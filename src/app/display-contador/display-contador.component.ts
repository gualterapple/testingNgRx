import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.scss']
})
export class DisplayContadorComponent implements OnInit {

  constructor() { }
  @Input() counter: number = 0;
  ngOnInit() {
  }

}

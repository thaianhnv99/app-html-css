import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-grid-tip',
  templateUrl: './use-grid-tip.component.html',
  styleUrls: ['./use-grid-tip.component.scss']
})
export class UseGridTipComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    console.log('use-grid-tip');
  }

}

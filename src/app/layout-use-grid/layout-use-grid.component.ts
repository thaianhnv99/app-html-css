import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout-use-grid',
  templateUrl: "./layout-use-grid.component.html",
  styleUrls: ['./layout-use-grid.component.scss']
})

export class LayoutUseGridComponent implements OnInit {
  images = [
    {src: 'https://images.unsplash.com/photo-1457264635001-828d0cbd483e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80'},
    {src: 'https://images.unsplash.com/photo-1531744124672-d108c886fe36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
    {src: 'https://images.unsplash.com/photo-1581285025904-e7f1a94c330b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
    {src: 'https://images.unsplash.com/photo-1627857517329-f7857341feac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
    {src: 'https://images.unsplash.com/photo-1627857517329-f7857341feac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
    {src: 'https://images.unsplash.com/photo-1627857517329-f7857341feac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
  ];

  imageForGrid: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.imageForGrid = this.images.slice(0, 5);
  }
}

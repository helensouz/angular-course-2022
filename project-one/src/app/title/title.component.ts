import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    console.log('componente destruido');
  }

  ngOnInit(): void {
  }

}

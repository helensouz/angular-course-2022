import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public position: {x: number, y: number} = {x: 0, y: 0};

  public nome: string = 'helen'


  public checkedDisabled: boolean = true;

  //event binding
  alertainfo(valor: MouseEvent){
    console.log(valor)
  }

  public mousemoveevent(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;

  }

  constructor() { }

  ngOnInit(): void {
  }

}

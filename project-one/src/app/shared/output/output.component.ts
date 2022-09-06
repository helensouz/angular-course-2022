import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter()


  public list: Array<{nome: string, idade: number}>=[
    {nome: 'helen', idade: 20},
    {nome: 'joao', idade: 35},
    {nome: 'ana', idade: 49}


  ]
  constructor() { }

  ngOnInit(): void {
  }

  //pegar a posicao exata
  public getDados(event: number){
    this.enviarDados.emit(this.list[event])
  }

}

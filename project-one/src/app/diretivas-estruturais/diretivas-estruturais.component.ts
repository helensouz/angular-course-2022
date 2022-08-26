import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condicao: boolean = true
  public list: Array<{ nome: string, idade: number }> = [
    {nome: 'helen souza', idade: 30},
    {nome: 'helen souza',idade: 20},
    {nome: 'helen souza', idade: 15}

  ]
  public onClickAdd() {
    this.list.push(
      {nome: 'joao', idade: 20},
      {nome: 'maria', idade: 30},
      {nome: 'vitor', idade: 40}
    )
  }

  public onClickRemove(){
    this.list.splice(0, 1)
  }

  public nome: string = 'helen'

  constructor() { }

  ngOnInit(): void {
  
   


  }

  

}

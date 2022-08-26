import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = false
  public height: string = '20px'
  public backgroundColor: string = 'red'

  public nome: string = 'teste'

  public list: Array<{nome: string}> = [{nome: 'helen'}, {nome: 'maria'}]

  public salvar(){
    this.list.push({nome: this.nome})
    this.nome = ""
  }

  public remover(){
    this.list.splice(0, 1)
  }
  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.valor){
        this.valor = false
      }else{
        this.valor = true
      }
      if(this.height == '20px'){
        this.height = '40px'
        this.backgroundColor = 'blue'
      }else{
        this.height = '40px'
        this.backgroundColor = 'red'

      }
    }, 2000)
  }

}

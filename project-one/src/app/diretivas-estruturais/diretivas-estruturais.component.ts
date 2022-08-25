import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condicao: boolean = true
  constructor() { }

  ngOnInit(): void {


    setInterval(() => {
    if(this.condicao){
      this.condicao = false
    }else{
      this.condicao = true
    }
    }, 2000)
  }

  

}

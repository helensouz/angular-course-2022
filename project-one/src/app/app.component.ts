import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
    public destruir:boolean = true;
    
    public getDados: {nome: string, idade: number} | undefined

  public addValue: number = 0

 

  constructor(){
  }
  
  ngOnInit(): void{
    
  }

  public add(){
    this.addValue += 1  
   
  }
   public setDados(event: {nome: string, idade: number}){
    this.getDados = event
   }



  public destruirComponente(){
    this.destruir = false
  }

  // public adicionar(): number{
  //   return this.valor += 1;
  // }
  // ngDoCheck(): void{
  //   console.log("ngDoCheck")
  // }
  // ngAfterContentInit(): void{
  //   console.log("ngAfterContentInit")
  // }
  // ngAfterContentChecked(): void{
  //   console.log("ngAfterContentChecked")
  // }
  // ngAfterViewInit():void{
  //   console.log("ngAfterViewInit")
  // }
  // ngAfterViewChecked(): void {
  //   console.log("ngAfterViewChecket")
  
  // } 
}

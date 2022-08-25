import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
    public destruir:boolean = true;
    
    

  constructor(){
  }
  
  ngOnInit(): void{
    
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

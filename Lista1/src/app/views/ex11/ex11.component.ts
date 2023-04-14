import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  templateUrl: './ex11.component.html',
  styleUrls: ['./ex11.component.css']
})
export class Ex11Component {

  classCss = "branco";

  trocaCor(){
    if(this.classCss == "branco"){
      this.classCss = "preto";
    }else
    this.classCss = "branco";
  }
}

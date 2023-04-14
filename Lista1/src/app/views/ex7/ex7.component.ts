import { Component } from '@angular/core';

@Component({
  selector: 'app-ex7',
  templateUrl: './ex7.component.html',
  styleUrls: ['./ex7.component.css']
})
export class Ex7Component {

  nome = "";

  lerNome(){

    var pNome = prompt("Digite seu nome");
    if(pNome !== null){
      this.nome = pNome;
    }

  }

}

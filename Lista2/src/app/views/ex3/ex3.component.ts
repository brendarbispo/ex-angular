import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component {

  nome = "";
  sobrenome = ""
  nomeCompleto = this.nome + this.sobrenome;
}

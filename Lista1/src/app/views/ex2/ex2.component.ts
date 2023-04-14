import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component {

  img= 'assets/dia.jpg';
  tamanhoImagem = 'tamanhoCss';

 troca() {
  if(this.img == 'assets/noite.jpg'){
    return this.img = 'assets/dia.jpg';

  }
  return this.img = 'assets/noite.jpg';



  }

}

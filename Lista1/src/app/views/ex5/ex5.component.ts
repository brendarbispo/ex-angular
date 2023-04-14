import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.css']
})
export class Ex5Component {
  classCss = 'vermelho';

  trocaCor(){
    if(this.classCss == 'vermelho'){
      this.classCss = 'azul';
    }else{
      this.classCss = 'vermelho';
    }
  }

}

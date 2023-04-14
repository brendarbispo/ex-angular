import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  templateUrl: './ex6.component.html',
  styleUrls: ['./ex6.component.css']
})
export class Ex6Component {

  doguinho = 'assets/img1.jpg';

  goldenn(){
    this.doguinho = 'assets/goldenn.gif';
  }
  pug(){
    this.doguinho = 'assets/img1.jpg';
  }
  caramelo(){
    this.doguinho = 'assets/caramelo.jpg';
  }

}

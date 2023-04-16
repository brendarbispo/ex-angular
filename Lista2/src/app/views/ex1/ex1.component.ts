import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit{

  foto = 'dog';
  nome = "";
  nomeCachorro = '';


  doginhos(nome : String){
    switch(nome){
      case 'pug':
        this.nomeCachorro = 'assets/img1.jpg';
      break;

      case 'golden':
        this.nomeCachorro = 'assets/goldenn.gif';
      break;

      case 'caramelo':
        this.nomeCachorro = 'assets/caramelo.jpg';
    }
  }

  ngOnInit(): void {}
}

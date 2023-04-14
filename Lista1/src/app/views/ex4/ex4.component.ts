import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})

export class Ex4Component{

  soma = 0;

  conte(n1: number, n2: number){
    this.soma = n1+n2;
  }

}

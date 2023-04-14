import { Component } from '@angular/core';

@Component({
  selector: 'app-ex8',
  templateUrl: './ex8.component.html',
  styleUrls: ['./ex8.component.css']
})
export class Ex8Component {
  div = "";

  inserirDiv(){
    this.div = "Isso é uma div :)";
    return this.div;
  }
}

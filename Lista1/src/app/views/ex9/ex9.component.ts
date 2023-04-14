import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  templateUrl: './ex9.component.html',
  styleUrls: ['./ex9.component.css']
})
export class Ex9Component {

  classCor = 'red';

  trocarR(){
    return this.classCor = 'red'
  }

  trocarY(){
    return this.classCor = 'yellow'
  }

  trocarG(){
    return this.classCor = 'green'
  }

}

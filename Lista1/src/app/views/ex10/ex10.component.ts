import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  templateUrl: './ex10.component.html',
  styleUrls: ['./ex10.component.css']
})
export class Ex10Component {

  classCss = "pink";

  troca(){
    if(this.classCss == "pink"){
      this.classCss = "yellow";
    }else{
      this.classCss = "pink";
    }
  }

}

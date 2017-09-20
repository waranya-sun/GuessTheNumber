import {Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('userGuessedNum') userGuessedNum: ElementRef;
  compRandomNum : number;
  afterSubtraction : number;
  numOfGuessing : number;

  constructor(){
    this.initializeRandomNum();
  }

  initializeRandomNum(){
    this.afterSubtraction = null;
    this.numOfGuessing = 0;
    this.compRandomNum = Math.floor(Math.random() * 10 + 1);
  }

  //Using Local Reference and pass to method in the template
  onVerify(guessedNum){
    this.afterSubtraction = this.compRandomNum - guessedNum.value;
    console.log(this.compRandomNum);
    console.log(guessedNum.value);
    this.numOfGuessing +=1;
  }

  //Using @ViewChild to access Local Reference from template
  onClear(){
    this.userGuessedNum.nativeElement.value = null;
    this.userGuessedNum.nativeElement.focus();
    this.initializeRandomNum();
  }

}

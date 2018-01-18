import { Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent  {

  @Input() title: string = "título";
  @Input() inputClass: string ="";
  constructor() { }


}

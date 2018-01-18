import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'card-coll',
  template: `<div class="{{inputClass}}"><ng-content></ng-content></div>

  `
})
export class CardCollComponent {
  @Input() inputClass: string = "ui-g-12";
  constructor() { }

}

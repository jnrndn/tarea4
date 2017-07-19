import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent {

  @Output() clickEvent: EventEmitter<any> = new EventEmitter;
  @Input() value:string;

  constructor() { }

  onClick(){
    this.clickEvent.emit()
  }

}

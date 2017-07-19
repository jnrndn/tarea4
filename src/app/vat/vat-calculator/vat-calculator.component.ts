import { Component, Input } from '@angular/core';
import { VatService } from './vat.service';


@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.css']
})
export class VatCalculatorComponent {
  
  val:number;
  article:string;
  total:number = 0;
  totalVat:number;

  @Input() vat:number;
  
  constructor( private vatService: VatService) { }

  calculate(){
    this.total = this.vatService.calculate(this.val, this.vat);
    this.calculateVat()
  }

  calculateVat(){
    this.totalVat = this.vatService.calculateVat(this.val, this.vat);
  }

}

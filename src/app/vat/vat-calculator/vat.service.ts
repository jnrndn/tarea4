import { Injectable } from '@angular/core';

@Injectable()
export class VatService {

  constructor() { }

  calculate(val, vat){
    return val * (1+(vat/100));
  }

  calculateVat(val, vat){
    return val * (vat/100);
  }

}

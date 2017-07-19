import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';


import { VatService } from './vat-calculator/vat.service';


import { VatCalculatorComponent } from './vat-calculator/vat-calculator.component';
import { VatComponent } from './vat.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [VatCalculatorComponent, VatComponent],
  providers:[VatService],
  exports:[VatComponent]
})
export class VatModule { }

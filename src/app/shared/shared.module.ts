import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [CapitalizePipe],
  imports: [
    CommonModule
  ],
  exports: [
    FlexLayoutModule
  ]
})
export class SharedModule { }

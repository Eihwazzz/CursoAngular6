import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemsComponent],
  exports: [ ItemsComponent ]
})
export class ItemsModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrainersComponent } from './trainers.component';

@NgModule({
  declarations: [
    TrainersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TrainersComponent,
  ]
})
export class TrainersModule { }

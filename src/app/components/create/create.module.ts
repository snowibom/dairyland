import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';



@NgModule({
  declarations: [
    CreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class CreateModule { }

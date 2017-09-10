import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AddComponent, IndexComponent, ListComponent]
})
export class CustomersModule { }

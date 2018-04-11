import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatExpansionModule, MatGridListModule, MatMenuModule],
  exports: [MatButtonModule, MatToolbarModule, MatExpansionModule, MatGridListModule, MatMenuModule],
})
export class MaterialModule { }

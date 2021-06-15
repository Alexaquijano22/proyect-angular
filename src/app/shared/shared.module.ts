import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MultiplicationPipe } from './pipes/multiplication/multiplication.pipe';
import { MaterialModule } from '@material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MultiplicationPipe],
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
})
export class SharedModule {}

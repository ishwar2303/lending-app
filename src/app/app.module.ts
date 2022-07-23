import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorrowerComponent } from './components/borrower/borrower.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

import { DuePaymentsComponent } from './components/due-payments/due-payments.component';
import { BodyHeaderComponent } from './includes/body-header/body-header.component';
import { NewBorrowerComponent } from './components/dialog/new-borrower/new-borrower.component';
@NgModule({
  declarations: [
    AppComponent,
    BorrowerComponent,
    DuePaymentsComponent,
    BodyHeaderComponent,
    NewBorrowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrowerComponent } from './components/borrower/borrower.component';
import { DuePaymentsComponent } from './components/due-payments/due-payments.component';

const routes: Routes = [
  { path: 'borrower', component: BorrowerComponent},
  { path: 'due-payments', component: DuePaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

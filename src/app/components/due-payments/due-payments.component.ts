import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'due-payments',
  templateUrl: './due-payments.component.html',
  styleUrls: ['./due-payments.component.css']
})
export class DuePaymentsComponent implements OnInit {

  title:string = 'Due Payments'

  constructor() { }

  ngOnInit(): void {
  }

}

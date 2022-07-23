import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.css']
})
export class BorrowerComponent implements OnInit {

  title: string = 'Borrower'

  newBorrowerDialogState: boolean = false


  showNewBorrowerDialog = () => {
    this.newBorrowerDialogState = true
  }

  hideNewBorrowerDialog = () => {
    this.newBorrowerDialogState = false
  }

  constructor() { }

  ngOnInit(): void {
  }

}

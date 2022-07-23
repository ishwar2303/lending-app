import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'new-borrower',
  templateUrl: './new-borrower.component.html',
  styleUrls: ['./new-borrower.component.css']
})
export class NewBorrowerComponent implements OnInit {

  @Input() hideNewBorrowerDialog: () => void

  constructor() {
    this.hideNewBorrowerDialog = () => {
    } 
  }

  ngOnInit(): void {
  }

}

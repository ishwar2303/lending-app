import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'body-header',
  templateUrl: './body-header.component.html',
  styleUrls: ['./body-header.component.css']
})
export class BodyHeaderComponent implements OnInit {

  @Input() item: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}

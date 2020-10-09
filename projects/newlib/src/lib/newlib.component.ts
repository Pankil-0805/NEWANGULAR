import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-newlib',
  template: `
    <p>
      new libs works!!
    </p>
  `,
  styles: [
  ]
})
export class NewlibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

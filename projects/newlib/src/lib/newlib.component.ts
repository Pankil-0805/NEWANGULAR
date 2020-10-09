import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-newlib',
  template: `
    <p>
      new libs are working !!
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

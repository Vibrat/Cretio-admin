import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lab',
  template: `
    <p>
      my-lab works!
    </p>
  `,
  styles: []
})
export class MyLabComponent implements OnInit {

  public something: string;

  constructor() { }

  ngOnInit() {
  }

}

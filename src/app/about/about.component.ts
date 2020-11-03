import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = 'Jingyi Huang';
  environment= 'Windows 10';
  ide ='VS Code & WebStorm';
}

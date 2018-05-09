import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../_animations/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [slideInOutAnimation],
  styleUrls: ['./home.component.css'],
  host: { '[@slideInOutAnimation]': '' }
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

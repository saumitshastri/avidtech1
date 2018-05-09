import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  animations: [fadeInAnimation],
  styleUrls: ['./services.component.css'],
  host: { '[@fadeInAnimation]': '' }
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

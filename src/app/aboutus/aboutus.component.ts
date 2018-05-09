import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  animations: [fadeInAnimation],
  styleUrls: ['./aboutus.component.css'],
  host: { '[@fadeInAnimation]': '' }
  
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

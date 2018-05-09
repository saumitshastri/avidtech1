import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  showbikeflag:boolean;
  showtrack360flag:boolean;
  showbatteryflag:boolean;

  constructor() {
    
   }

  ngOnInit() {
    this.showbikeflag= false;
    this.showtrack360flag= false;
    this.showbatteryflag= false;
  }

  bikedetails() {
    this.showbikeflag= true;

  }
 
  lessbikedetails(){
    this.showbikeflag= false;
  }

  track360details() {
    this.showtrack360flag= true;
  }

  lesstrack360details() {
    this.showtrack360flag= false;
  }

  batterydetails() {
    this.showbatteryflag= true;
  }

  lessbatterydetails() {
    this.showbatteryflag= false;
  }

 
}

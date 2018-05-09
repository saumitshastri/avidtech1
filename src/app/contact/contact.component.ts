import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 18.516726;
  lng: number = 73.856255;

  name = "";
  email = "";
  phoneno = "";
  message = "";
  onSubmit(formvalue){
    console.log(formvalue)
    
  }


  


  constructor() { }

  ngOnInit() {
  }

}

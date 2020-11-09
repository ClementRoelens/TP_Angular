import { Component } from '@angular/core';

interface Image {
  src: string;
  alt: string;
}

interface Student {
  name: string;
  grade: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //propriétés
  title : string = 'TP Carousel';

  // méthodes
  constructor() { }

  
}
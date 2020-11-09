import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent  {

  //propriétés
  checked : boolean = false ;
  color : string = 'grey';
  text : string = 'Non';


  //méthodes
  constructor() { }

  actualisation(){
    if (this.checked == false){
      this.checked = true;
      this.color = 'green';
      this.text = 'Oui';
    }
    else {
      this.checked = false;
      this.color = 'grey';
      this.text = 'Non';
    }
  }


}

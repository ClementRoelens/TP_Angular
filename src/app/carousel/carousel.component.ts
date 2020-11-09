import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent  {
  
  //propriétés
  test : string = "https://www.sciencesetavenir.fr/assets/img/2016/04/08/cover-r4x3w1000-588aa9b874bf0-pilier.jpg";
  gallerie : string[] =
  ["https://www.sciencesetavenir.fr/assets/img/2016/04/08/cover-r4x3w1000-588aa9b874bf0-pilier.jpg",
    "https://www.missnumerique.com/blog/wp-content/uploads/Astrophotographie-dune-galaxie-par-guillermo-ferla.jpg",
    "https://medias.voyageons-autrement.com/gallery/2018/01/Arche-c%C3%A9leste-Au-dessus-des-nuages-1024x683.jpg",
    "https://astronomie-pratique.com/wp-content/uploads/2020/05/astrophotographie.jpg.webp"
  ];
  index : number = 0;

  //méthodes
  constructor() { 
    setInterval(() => {
      this.defilement();
    },3000)
  }

  defilement(){
    if (this.index == 3){
      this.index = 0;
    }
    else{
      this.index++;
    }
  }
 
  
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products = [
    {
      titre: "Nos pizzas",
      description: "Toutes nos pizzas sont faites maison avec des ingrédients frais et issus des circuits courts.",
      image: "assets/img/pizza.jpg",
    },
    {
      titre: "Nos pâtes",
      description: "Nos pâtes et ravioles sont frais et faits maison.",
      image: "/assets/img/pates.jpg"
    },
    {
      titre: "Nos salades",
      description: "Nos salades sont délicieuses et vous permettent de manger léger et équilibré.",
      image: "assets/img/salade.jpg"
    },
    {
      titre: "Nos désserts",
      description: "Pour conclure en beauté, pas de festin italien sans dulce bien sucré !",
      image: "assets/img/dessert.jpg"
    },
    {
      titre: "Nos boissons fraîches",
      description: "Un soda ou une eau fraîche pour accompagner votre repas.",
      image: "assets/img/boissons-fraiches.jpg"
    },
    {
      titre: "Nos vins",
      description: "Des vins italiens, blanc, rosé ou rouge, pour accompagner vos repas.",
      image: "assets/img/vins.jpg"
    }
  ]


  constructor() { }
}

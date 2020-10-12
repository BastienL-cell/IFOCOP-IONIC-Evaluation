import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  products: any[];

  constructor(private productService : DataService) { }

  ngOnInit() {
    this.products = this.productService.products;
  }

}

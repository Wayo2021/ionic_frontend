import { DrinkrewardService } from './../services/drinkreward.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Drink, Type, Types, Size } from 'src/app/models/drinkreward.model';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-drink2',
  templateUrl: './drink2.page.html',
  styleUrls: ['./drink2.page.scss'],
})
export class Drink2Page implements OnInit {
  typs_id: any;
  typs: Types[];
  types: Types = {
    typs_id: null,
    typs_name: null,
    image: null,
  };

  searchDrinks: string;
  drk_id: any;

  drink: Drink = {
    drk_id: null,
    drk_name: '',
    drk_price: '',
    drk_detail: null,
    image: '',
    typ_id: null,
    typs_id: '',
    siz_id: null,
    typs_name: null,
    data: undefined,
  };
  drk: Drink[];
  constructor(
    private drinkrewardService: DrinkrewardService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private storage: Storage
  ) {
    this.typs_id = this.activatedRoute.snapshot.paramMap.get('typs_id');
    console.log('ParamMap ID', this.typs_id);
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.loadPageData();
  }

  loadPageData() {
    console.log('loadPageData', this.typs_id);
    this.drinkrewardService.getDrink(this.typs_id).subscribe((response) => {
      console.log('Drink2Page>ionViewDisEnter>drinkrewardService.listDrink');
      this.drk = response.data.drink;
      console.log(this.drink);
    });
  }

  getItems() {
    return this.drk.filter((item) => item.data.drk === 1);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.page.html',
  styleUrls: ['./reward.page.scss'],
})
export class RewardPage implements OnInit {
  drink_id: any;
  drink_name: any;
  drink_type: any;
  drink_typ: any;
  drink_size: any;
  drink_price: any;
  image: any;
  constructor() {}

  ngOnInit() { }
  update(){}
}

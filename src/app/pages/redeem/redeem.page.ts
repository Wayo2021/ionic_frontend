import { CustomersService } from './../../services/customers.service';
import { Component, OnInit } from '@angular/core';
import { DrinkrewardService } from './../../services/drinkreward.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reward } from 'src/app/models/drinkreward.model';
import { filter } from 'rxjs/operators';
import { Customers } from 'src/app/models/customers.model';
@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.page.html',
  styleUrls: ['./redeem.page.scss'],
})
export class RedeemPage implements OnInit {
  searchRewards: string;
  rew: Reward[];
  reward: Reward = {
    rew_id: null,
    rew_name: '',
    rew_remain: null,
    rew_point: null,
    rew_detail: null,
    image: null,
  };

  constructor(
    private router: Router,
    private drinkrewardService: DrinkrewardService,
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService
  ) {
    // this.getRedeems();
  }

  ngOnInit() {}
  // getRedeems() {
  //   this._apiService.getRedeems().subscribe(
  //     (res: any) => {
  //       console.log('Success ===', res);
  //       this.redeems = res;
  //     },
  //     (error: any) => {
  //       alert('Error drink.page.ts');
  //     }
  //   );
  // }

  ionViewDidEnter() {
    this.loadPageData();
  }

  // searchReward(data: any) {
  //   const search = data.target.value;
  //   if (search && search.trim() !== '') {
  //     const filterReward = this.rew.filter((rew) => {
  //       console.log(search);
  //       return rew.rew_name.includes(search);
  //     });
  //     this.rew = filterReward;
  //   } else {
  //     this.ionViewDidEnter();
  //   }
  // }
  loadPageData() {
    this.drinkrewardService.listReward().subscribe((response) => {
      console.log('redeemPage>ionViewDisEnter>drinkrewardService.listReward');
      this.rew = response.data.listReward;
      console.log(this.rew);
    });
  }

  GetReward() {
    const rew_id = this.rew[0].rew_id;
    this.router.navigate(['/redeem2/' + rew_id]);
  }
  handleRefresh(event) {
    this.loadPageData();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 1000);
  }
}

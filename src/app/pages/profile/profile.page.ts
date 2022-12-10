import { Point_total } from './../../models/customers.model';
import { Customers } from './../../models/login.model';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';
import { CustomersService } from 'src/app/services/customers.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  [x: string]: any;
  cus_id: any;

  loginUser: Customers = {
    cus_id: null,
    cus_first_name: null,
    cus_last_name: null,
    cus_sex: null,
    cus_phone: null,
    cus_email: null,
    cus_password: null,
    image: null,
    cus_status: null,
    tot_id: '',
    cus_point: null,
  };

  customers: Customers = {
    cus_id: null,
    cus_first_name: null,
    cus_last_name: null,
    cus_sex: null,
    cus_phone: null,
    cus_email: null,
    cus_password: null,
    image: null,
    cus_status: null,
    tot_id: null,
    cus_point: null,
  };
  cus: Customers[];

  tot_id: any;
  point_total: Point_total = {
    tot_id: null,
    tot_date: null,
    tot_point: '',
    cus_phone: null,
  };
  point: Point_total[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService,
    private router: Router,
    private storage: Storage,
    private loadingCtrl: LoadingController
  ) {
    this.initStorage();
    router.events
      .pipe(filter((e) => e instanceof NavigationStart))
      .subscribe((r: NavigationStart) => {
        this.loadCustomersData();
        // this.loadPointData();
      });

    this.cus_id = this.activatedRoute.snapshot.paramMap.getAll('cus_id');
    console.log('ParamMap cus_id', this.cus_id);
  }

  ngOnInit() {
    console.log('>>>>> init profilePage');
  }

  ionViewDidEnter() {
    console.log('>>>>> ionViewDidEnter');
    this.loadCustomersData();
  }

  // Logouts() {
  //   this.clearStorage();
  //   this.router.navigate(['/login']);
  // }

  async Logouts() {
    this.clearStorage();
    this.router.navigate(['/login']);
    const loading = await this.loadingCtrl.create({
      message: 'กำลังออกจากระบบ...',
      duration: 1000,
    });

    loading.present();
  }

  loadPointData() {
    console.log('loadPointData', this.cus_id);
    this.customersService.getCustomers(this.cus_id).subscribe((response) => {
      console.log('ProfilePage>drinkrewardService.getCustomers');
      this.cust = response.data.customers;
      console.log(response.data);
    });
  }

  // loadPoint_totalData() {
  //   console.log('loadPointData', this.tot_id);
  //   this.customersService.getPoint_total(this.tot_id).subscribe((response) => {
  //     console.log('ProfilePage>drinkrewardService.getCustomers');
  //     this.point = response.data.point_total;
  //     console.log(response.data);
  //   });
  // }

  async initStorage() {
    await this.storage.create();
  }

  async ionViewWillEnter() {
    console.log('>>>>> ionViewWillEnter');
    console.log('Wayo on');
    this.loginUser = await this.getDataFromStorage('loginUser');
    console.log(this.loginUser);
  }
  async getDataFromStorage(key: string) {
    const value = await this.storage.get(key);
    return value;
  }
  async setDataToStorage(key: string, data: any) {
    await this.storage.set(key, data);
  }
  async clearStorage() {
    await this.storage.clear();
  }

  //ดึงข้อมูลของ customers ทุก records
  loadCustomersData() {
    this.customersService.listCustomers().subscribe((response) => {
      console.log('customersPage>ionViewDisEnter>loginService.listCustomers');
      console.log(response);
    });
  }
  // ส่งไอดีไปแก้ไขข้อมูล
  redirecToEditProfile() {
    const editcutomersID = this.loginUser.cus_id;
    console.log('send ID profile to edit-customers');
    this.router.navigate(['/edit-customers/', editcutomersID]);
  }
  redirecToRedeem() {
    const cutomersID = this.loginUser.cus_id;
    console.log('send ID profile to edit-customers');
    this.router.navigate(['/taps/redeem/', cutomersID]);
  }
  handleRefresh(event) {
    this.loadPointData();
    this.loadCustomersData();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  myReward() {
    const editcutomersID = this.loginUser.cus_id;
    console.log('send ID profile to Show My Reward');
    this.router.navigate(['/show-reward/', editcutomersID]);
  }
}

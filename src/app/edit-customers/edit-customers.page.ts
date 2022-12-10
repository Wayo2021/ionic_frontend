import { ApiRequest } from './../models/login.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { CustomersService } from '../services/customers.service';
import { Customers } from '../models/login.model';
import { filter } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.page.html',
  styleUrls: ['./edit-customers.page.scss'],
})
export class EditCustomersPage implements OnInit {
  cus_id: any;

  customers: Customers = {
    cus_id: null,
    cus_first_name: '',
    cus_last_name: '',
    cus_sex: null,
    cus_phone: null,
    cus_email: '',
    cus_password: '',
    image: null,
    cus_status: null,
    tot_id: null,
    cus_point:null
  };
  loginUser: Customers = {
    cus_id: null,
    cus_first_name: '',
    cus_last_name: '',
    cus_sex: null,
    cus_phone: null,
    cus_email: '',
    cus_password: '',
    image: null,
    cus_status: null,
    tot_id: null,
    cus_point:null
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService,
    private router: Router,
    private storage: Storage,
    private alertController: AlertController
  ) {
    this.cus_id = this.activatedRoute.snapshot.paramMap.get('cus_id');
    console.log('ParamMap cus_id', this.cus_id);
    this.initStorage();
    router.events
      .pipe(filter((e) => e instanceof NavigationStart))
      .subscribe((r: NavigationStart) => {
        this.loadCustomersData();
      });
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.customersService.getCustomers(this.cus_id).subscribe((response) => {
      this.customers = response.data.customers;
      console.log('customers = ', this.customers);
    });
  }

  async initStorage() {
    await this.storage.create();
  }
  async ionViewWillEnter() {
    console.log('Wayo');
    this.loginUser.cus_id = await this.getDataFromStorage('loginUser');
    console.log(this.loginUser.cus_id);
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

  loadCustomersData() {
    console.log(this.loginUser);
  }

  editSave() {
    console.log(this.customers);
    this.customersService
      .updateCustomers(this.customers)
      .subscribe((response) => {
        console.log(response);
        if (response.status === 'success') {
          this.resetCustomersData();
          this.presentAlert();
        }
      });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'แก้ไขโปรไฟล์เรียบร้อย',
      message: 'กรุณาเข้าสู่ระบบใหม่',
      buttons: [
        {
          text: 'ตกลง',
          handler: (blah) => {
            this.router.navigate(['/login']);
          },
        },
      ],
    });

    await alert.present();
  }

  changePassword() {
    this.router.navigate(['/change-password']);
  }

  resetCustomersData() {
    this.cus_id = {
      cus_id: null,
      cus_first_name: '',
      cus_last_name: '',
      cus_sex: null,
      cus_phone: null,
      cus_email: '',
      cus_password: '',
      image: null,
      cus_status: null,
      tot_id: null,
      poi_id: null,
    };
  }
}

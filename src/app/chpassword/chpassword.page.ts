import { Component, OnInit } from '@angular/core';
import { CustomersService } from './../services/customers.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Customers } from '../models/customers.model';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-chpassword',
  templateUrl: './chpassword.page.html',
  styleUrls: ['./chpassword.page.scss'],
})
export class ChpasswordPage implements OnInit {
  newPassword: string;
  loginUser: Customers = {
    cus_id: null,
    cus_first_name: null,
    cus_last_name: null,
    cus_sex: null,
    cus_phone: null,
    cus_email: null,
    cus_password: '',
    image: null,
    cus_status: null,
    tot_id: '',
    cus_point:null,
  };

  customers: Customers = {
    cus_id: null,
    cus_first_name: null,
    cus_last_name: null,
    cus_sex: null,
    cus_phone: null,
    cus_email: null,
    cus_password: '',
    image: null,
    cus_status: null,
    tot_id: null,
    cus_point:null
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private CustomersService: CustomersService,
    private router: Router,
    private storage: Storage,
    private alertController: AlertController
  ) {
    this.initStorage();
  }

  ngOnInit() {}

  async initStorage() {
    await this.storage.create();
  }

  async ionViewWillEnter() {
    console.log('Wayo');
    this.loginUser = await this.getDataFromStorage('loginUser');
    console.log('---> this.loginUser :: ', this.loginUser);
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

  onClickSavePassword() {
    this.customers.cus_password = this.newPassword;
    this.customers.cus_id = this.loginUser.cus_id;
    console.log(this.customers);
    this.CustomersService.updatePassword(this.customers).subscribe(
      (response) => {
        console.log(response);
        if (response.status === 'success') {
          this.clearStorage();
          this.presentAlert();
        }
      }
    );
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'แก้ไขรหัสผ่านเรียบร้อย',
      message: 'กรุณาเข้าสู่ระบบ',
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
}

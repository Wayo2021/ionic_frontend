import { CustomersService } from './../services/customers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Customers } from '../models/customers.model';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  cus_id: any;
  currentPassword: string;

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
    this.loginUser = await this.getDataFromStorage('loginUser');
    console.log('---> this.loginUser :: ', this.loginUser);
  }

  async getDataFromStorage(key: string) {
    const value = await this.storage.get(key);
    return value;
  }
  onClickNext() {
    console.log('---> currentPassword :: ', this.currentPassword);
    if (this.currentPassword === this.loginUser.cus_password) {
      this.router.navigate(['/chpassword']);
    } else {
      this.presentAlert();
      console.log('current password not match');
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      message: 'ป้อนรหัสผ่านไม่ถูกต้อง',
      buttons: [
        {
          text: 'ตกลง',
          handler: (blah) => {
            // this.router.navigate(['/home']);
          },
        },
      ],
    });

    await alert.present();
  }
}

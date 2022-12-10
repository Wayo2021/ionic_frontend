import { ApiRequest } from './../models/login.model';
import {
  NavController,
  AlertController,
  LoadingController,
  AlertOptions,
  ToastController,
} from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import 'rxjs/add/operator/map';
import { CustomersService } from '../services/customers.service';
import { Customers } from '../models/customers.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  // @ViewChild('firstname') firstname;
  // @ViewChild('lastname') lastname;
  // @ViewChild('username') username;
  // @ViewChild('password') password;

  // cus_first_name: any;
  // cus_last_name: any;
  // cus_email: any;
  // cus_phone: any;
  // cus_sex: any;
  // cus_password: any;
  // customer: any = [];

  customers: Customers = {
    cus_id: null,
    cus_first_name: '',
    cus_last_name: '',
    cus_sex: null,
    cus_phone: '',
    cus_email: '',
    cus_password: '',
    image: null,
    tot_id: null,
    cus_status: null,
    cus_point:null
  };
  // request: ApiRequest = { image: null };
  imageSrc: string = '';

  checkPassword = {
    cus_password: null,
    cus_passwords: null,
  };

  constructor(
    private customersService: CustomersService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}
  async Onregister() {
    console.log(this.customers);

    this.customersService.createCustomers(this.customers).subscribe(
      async (response) => {
        console.log('Success ===', response);
        console.log('status ===', response.status);
        if (response.status === 'error') {
          this.resetCustomersData();
          this.presentAlertS();
        }
      },
      (error: any) => {
        this.presentAlertE();
        console.log('Error ===', error);
      }
    );
  }
  async presentAlertS() {
    const alert = await this.alertController.create({
      header: 'ลงทะเบียนสำเร็จ',
      message: 'คุณต้องการเข้าสู่ระบบ หรือไม่',
      buttons: [
        {
          text: 'ตกลง',
          handler: (blah) => {
            this.router.navigate(['/login']);
          },
        },
        {
          text: 'ยกเลิก',
          handler: (blah) => {
            this.router.navigate(['/registration']);
          },
        },
      ],
    });
    await alert.present();
  }
  async presentAlertE() {
    const alert = await this.alertController.create({
      header: 'ลงทะเบียนไม่สำเร็จ',
      message: 'เบอร์โทรศัพท์นี้มีผู้ใช้แล้ว',
      buttons: [
        {
          text: 'ตกลง',
          handler: (blah) => {
            this.router.navigate(['/registration']);
          },
        },
      ],
    });
    await alert.present();
  }

  resetCustomersData() {
    this.customers = {
      cus_id: null,
      cus_first_name: '',
      cus_last_name: '',
      cus_sex: '',
      cus_phone: '',
      cus_email: '',
      cus_password: '',
      image: null,
      tot_id: null,
      cus_status: null,
      cus_point:null
    };
  }

  // async Onregister() {
  //   if (this.firstname.value == '') {
  //     let alert = await this.alertCtrl.create(<AlertOptions>{
  //       title: 'ATTENTION',
  //       subTitle: 'Username field is empty',
  //       buttons: ['OK'],
  //     });

  //     alert.present();
  //   } else if (this.lastname.value == '') {
  //     let alert = await this.alertCtrl.create(<AlertOptions>{
  //       title: 'ATTENTION',
  //       subTitle: 'Email field is empty',
  //       buttons: ['OK'],
  //     });

  //     alert.present();
  //   } else if (this.username.value == '') {
  //     let alert = await this.alertCtrl.create(<AlertOptions>{
  //       title: 'ATTENTION',
  //       subTitle: 'Mobile number field is empty',
  //       buttons: ['OK'],
  //     });

  //     alert.present();
  //   } else if (this.password.value == '') {
  //     let alert = await this.alertCtrl.create(<AlertOptions>{
  //       title: 'ATTENTION',
  //       subTitle: 'Password field is empty',
  //       buttons: ['OK'],
  //     });

  //     alert.present();
  //   } else {
  //     var headers = new Headers();
  //     let authToken = this.users.getUser().JWT;
  //     headers.append('Accept', 'application/json');
  //     headers.append('Content-Type', 'application/json');
  //     let options = new RequestOptions({ headers: headers });

  //     let data = {
  //       firstname: this.firstname.value,
  //       lastname: this.lastname.value,
  //       username: this.username.value,
  //       password: this.password.value,
  //     };

  //     let loader = await this.loading.create(<AlertOptions>{
  //       content: 'Processing please wait...',
  //     });

  //     loader.present().then(() => {
  //       this.Http
  //         .post('http://localhost/ioniccrud/backend/register.php', data, options).timeout(1000)
  //         .subscribe(async (res) => {
  //           loader.dismiss();
  //           if (res == 'Registration successfull') {
  //             let alert = await this.alertCtrl.create(<AlertOptions>{
  //               title: 'CONGRATS',
  //               message: res,
  //               buttons: ['OK'],
  //             });

  //             alert.present();
  //           } else {
  //             let alert = await this.alertCtrl.create(<AlertOptions>{
  //               title: 'ERROR',
  //               subTitle: res,
  //               buttons: ['OK'],
  //             });

  //             alert.present();
  //           }
  //         });
  //     });
  //   }
  // }
}

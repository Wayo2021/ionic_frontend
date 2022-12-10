import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Customers } from '../models/login.model';
import { ApiRequest } from '../models/login.model';
import { LoginService } from '../services/login.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { observable } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  MaxValidator,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isSubmittes = false;
  loginReques: ApiRequest = {
    cus_phone: null,
    cus_password: null,
  };

  loginUser: Customers = {
    cus_id: null,
    cus_first_name: null,
    cus_last_name: null,
    cus_sex: null,
    cus_phone: null,
    cus_email: null,
    cus_password: null,
    image: null,
    tot_id: null,
    cus_status: null,
    cus_point:null
  };

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private storage: Storage,
    public alertController: AlertController,
    private loadingCtrl: LoadingController
  ) {
    this.initStorate();
  }

  async initStorate() {
    await this.storage.create();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      cus_phone: ['', [Validators.required, Validators.minLength(10)]],
      cus_password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  async onSubmitForm() {
    console.log('handle onSubmitFrom');
    this.isSubmittes = true;

    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      this.loginReques.cus_phone = this.loginForm.get('cus_phone').value;
      this.loginReques.cus_password = this.loginForm.get('cus_password').value;
      console.log('loginRequest = ', this.loginReques);

      const loading = await this.loadingCtrl.create({
        message: 'กำลังเข้าสู่ระบบ...',
        duration: 1500,
      });
      await loading.present();

      this.loginService
        .doLogin(this.loginReques)
        .subscribe(async (response) => {
          console.log('response = ', response);
          loading.dismiss();
          if (response.status === 'success') {
            this.loginUser = response.data.customers;
            await this.setDataToStorage('loginUser', this.loginUser);

            if (this.loginUser.cus_status === '') {
              console.log('block');
              this.presentAlert();
            }

            if (this.loginUser.cus_status === 'normal') {
              this.router.navigate(['/taps/profiles/' + this.loginUser.cus_id]);
              console.log('loginPage cus_id');
              this.router.navigate(['/taps/drink/']);
            } else {
              console.log('///');
              this.presentAlertNotcustomers();
            }
            console.log(this.loginUser);
          } else {
            console.log('login in fail : ', response.message);
          }
        });
    }
  }
  async setDataToStorage(key: string, data: any) {
    await this.storage.set(key, data);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'คุณถูกระงับบัญชี',
      message: 'เนื่องจากบัญชีคุณถูกรายงาน',
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

  async presentAlertNotcustomers() {
    const alert = await this.alertController.create({
      header: 'คุณยังไม่เป็นสมาชิก',
      message: 'เนื่องจากผู้ดูแลระบบยังไม่ยืนยันการเป็นสมาชิก',
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

  // ionViewWillEnter() {
  //   console.log('Login');
  // }

  // login(form) {
  //   let username = form.value.username;
  //   let password = form.value.password;

  //   this.loginService.getlogin(username, password).subscribe((data) => {
  //     if (data[0].status == 'success') {
  //       let id = data[0].user.id;
  //       let firstname = data[0].user.firstname;
  //       let lastname = data[0].user.lastname;
  //       localStorage.setItem('user_id', id);
  //       localStorage.setItem('userinfo', JSON.stringify(data[0].user));

  //       this.router.navigate(['/home']);
  //     } else if (data[0].status == 'fail') {
  //       alert('Login fail.Please enter your correct email and password');
  //     }
  //   });
  // }
  // async ngOnInit() {
  //   // If using a custom driver:
  //   // await this.storage.defineDriver(MyCustomDriver)
  //   await this.storage.create();
  // }

  // Logins สร้าง function ให้ตรงกับ login.page.html
  // async Logins() {
  //   // ตรวจสอบหากไม่ได้ทำการตรวจสอบว่า หากไม่มีค่าจะไม่เข้ามาทำในคำสั่งนี้ โดยที่เราจะให้แสดงแบบ alert ก็ได้
  //   if (this.cus_phone != '' && this.cus_password != '') {
  //     console.log('ข้อมูลมี');

  //     // เก็บข้อมูลลงใน object requestData จะตั้งชื่อว่าอะไรก็ตามที่เราชอบเลย
  //     const requestData = {
  //       cus_phone: this.cus_phone,
  //       cus_password: this.cus_password,
  //       postData: 'login',
  //     };
  //     // แสดงผลเพื่อทำการตรวจสอบค่าว่าถูกส่งมาหรือเปล่านะ
  //     console.log(requestData);

  //     const loading = await this.loadingCtrl.create({
  //       message: 'กำลังเข้าสู่ระบบ ...',
  //     });
  //     await loading.present();
  //     // เรียกใช้ restProvider function login path src>app>providers>rest.service.ts โดยทำการส่ง requestData
  //     this.restProvider.login(requestData).then(
  //       (data) => {
  //         this.response = data;
  //         console.log(this.response);
  //         loading.dismiss();
  //         this.router.navigateByUrl('/home');
  //         // ทำการตรวจสอบว่า หาก return ค่ามาเป็น error จะให้ไปสมัครสมาชิกนะ หากไม่ใช่ error ก็เข้าสู่ระบบได้เลย
  //         // if (this.response.status == 'error') {
  //         //   this.router.navigate(['/login']);
  //         // } else {
  //         //   this.router.navigate(['/home']);
  //         // }
  //       },
  //       async () => {
  //         const alert = await this.alertCtrl.create({
  //           message: 'ล็อคอินไม่สำเร็จ',
  //           buttons: ['OK'],
  //         });
  //         await alert.present();
  //         loading.dismiss();
  //       }
  //       // (err) => {
  //       //   // หากข้อมูลผิดพลาดในการส่งให้แสดง อาการ error
  //       //   console.log(err);
  //       // }
  //     );
  //   } else {
  //     // กรณีข้อมูลไม่ได้ถูกใส่ครบ
  //     console.log('ข้อมูลไม่มี');
  //   }
  // }
  // // End Login
  // register() {
  //   this.router.navigate(['/register']);
  // }
}

import { AlertController } from '@ionic/angular';
import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';
import { Router, NavigationStart,ActivatedRoute } from '@angular/router';
import { Customers } from '../models/login.model';
import { Storage } from '@ionic/storage';
import { filter } from 'rxjs/operators';
import { CustomersService } from '../services/customers.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  years: any;
  studentOne: any;
  studentTwo: any;
  students: any = [];
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
    tot_id: null,
    cus_point: null,
    cus_status: null,
  };
  constructor(
    private router: Router,
    private customersService: CustomersService,
    private stroage: Storage,
    private alertController: AlertController,
    private _apiService:ApiService
  ) {
    // this.getStudents();
  }

  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'คุณยังไม่เข้าสู้ระบบ ',
  //     message: 'กรุณาเข้าสู่ระบบ',
  //     buttons: [
  //       {
  //         text: 'ตกลง',
  //         handler: (blah) => {
  //           this.router.navigate(['/home']);
  //         },
  //       },
  //     ],
  //   });

  //   await alert.present();
  // }
  // addStudent() {
  //   let data = {
  //     years: this.years,
  //     studentOne: this.studentOne,
  //     studentTwo: this.studentTwo,
  //   };

  //   this._apiService.addStudent(data).subscribe(
  //     (res: any) => {
  //       console.log('Success ===', res);
  //       this.years = '';
  //       this.studentOne = '';
  //       this.studentTwo = '';
  //       alert('Success home.page.ts');
  //       this.getStudents();
  //     },
  //     (error: any) => {
  //       alert('Error home.page.ts');
  //       console.log('Error ===', error);
  //     }
  //   );
  // }

  // getStudents() {
  //   this._apiService.getStudents().subscribe(
  //     (res: any) => {
  //       console.log('Success ===', res);
  //       this.students = res;
  //     },
  //     (error: any) => {
  //       alert('Error home.page.ts');
  //     }
  //   );
  // }

  // deleteStudent(id) {
  //   this._apiService.deleteStudent(id).subscribe(
  //     (res: any) => {
  //       console.log('Success ===', res);
  //       this.getStudents();
  //     },
  //     (error: any) => {
  //       alert('Error home.page.ts');
  //     }
  //   );
  // }

  // refreshPage(event) {
  //   this.getStudents();
  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     event.target.complete();
  //   }, 2000);
  // }

}

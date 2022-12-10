import { DrinkrewardService } from './../../services/drinkreward.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Types} from 'src/app/models/drinkreward.model';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.page.html',
  styleUrls: ['./drink.page.scss'],
})
export class DrinkPage implements OnInit {
  // years: any;
  // studentOne: any;
  // studentTwo: any;
  // students: any = [];

  searchDrinks: string;
  typs: Types[];
  types: Types = {
    typs_id: null,
    typs_name: null,
    image: null,
  };
  constructor(
    private drinkrewardService: DrinkrewardService,
    private router: Router
  ) {
    // this.getStudents();
    // this.getDrinks();
  }

  ngOnInit() {}

  // getStudents() {
  //   this._apiService.getStudents().subscribe(
  //     (res: any) => {
  //       console.log('Success ===', res);
  //       this.students = res;
  //     },
  //     (error: any) => {
  //       alert('Error update-student.page.ts');
  //     }
  //   );
  // }

  ionViewDidEnter() {
    this.loadPageData();
  }

  loadPageData() {
    this.drinkrewardService.listTypes().subscribe((response) => {
      console.log('DrinkPage>ionViewDisEnter>drinkrewardService.listTypes');
      this.typs = response.data.listTypes;
      console.log(this.typs);
    });
  }

  SeeTypes() {
    const typs_id = this.typs[0].typs_id;
    this.router.navigate(['/drink2/', typs_id]);
  }

  // getDrinks() {
  //   this._apiService.getDrinks().subscribe(
  //     (res: any) => {
  //       console.log('Success ===', res);
  //       this.drinks = res;
  //     },
  //     (error: any) => {
  //       alert('Error drink.page.ts');
  //     }
  //   );
  // }
}

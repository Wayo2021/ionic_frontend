import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
  id: any;
  years: any;
  studentOne: any;
  studentTwo: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService
  ) {
    // this.route.params.subscribe((param: any) => {
    //   this.id = param.id;
    //   console.log(this.id);
    //   this.getStudent(this.id);
    // });
  }

  ngOnInit() {}

  // getStudent(id) {
  //   this._apiService.getStudent(id).subscribe(
  //     (res: any) => {
  //       console.log("Success ===", res);
  //       let student = res[0];
  //       this.years = student.years;
  //       this.studentOne = student.studentOne;
  //       this.studentTwo = student.studentTwo;
  //     },
  //     (error: any) => {
  //       alert('Error update-student.page.ts');
  //     }
  //   );
  // }

  // updateStudent() {
  //   let data = {
  //     years: this.years,
  //     studentOne: this.studentOne,
  //     studentTwo: this.studentTwo,
  //   };
  //   this._apiService.updateStudent(this.id,data).subscribe(
  //     (res: any) => {
  //       console.log('Success ===', res);
  //       this.router.navigateByUrl('/home');
  //     },
  //     (error: any) => {
  //       alert('Error update-student.page.ts');
  //     }
  //   );
  // }
}

import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  public firstname:string='';
  public lastname :string='';
  public phone  : number=0;
  public gender   :string='';
  public male     :string='';
  public female   :string='';
  public age      :number=0;
  public mobile   :number=0;
  public email    :string='';
  public batch    :string='';
  public address  :string='';
  public education:string='';

  public students:Student[]=[];


  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.students['push'](
      {
      'firstname':this.firstname,
      'lastname' :this.lastname,
      'phone'    :this.phone,
      'gender'   :this.gender,
      'age'      :this.age,  
      'mobile'   :this.mobile,
      'email'    :this.email,
      'batch'    :this.batch,
      'address'  :this.address,
      'education':this.education
    }  
 );
 }
 delete(i:number){
  this.students.splice(i,1);
 }

}

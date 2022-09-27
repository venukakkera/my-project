import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

      public students :Student[]=[];

      public column :string='';
      public order : string='';
      public filterTerm : string='';

constructor( private _studentService: StudentService , private router :Router) {

     this._studentService.getStudent().subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
     )
   }
  ngOnInit(): void {
  }
  sort(){
    return this._studentService.sortStudent(this.column , this.order).subscribe(
      (data:any)=>{
        this.students= data;
      },
      (err:any)=>{
       alert('Internal server');
      }  
    )
  }
  page(pageNo:number){

    this._studentService.getPagedStudent(pageNo).subscribe(
      (data:any)=>{
        this.students= data;
      },
      (err:any)=>{
       alert('Internal server');
      }
    )

  }
  filter(){
    return this._studentService.getFilterStudent(this.filterTerm).subscribe(
      (data:any)=>{
        this.students= data;
      },
      (err:any)=>{
       alert('Internal server');
      }
    )
  }
   delete(id:string){
    return this._studentService.deleteStudents(id).subscribe(
      (data:any)=>{
        alert('Deleted successfully!!');
        location.reload();
      },
      (err:any)=>{
        alert('Internal error');
      }
      )
   }
  view(){
   return this.router.navigateByUrl('/ dashboard/createstudent');
  }
 edit(){
   return this.router.navigateByUrl('/dashboard/edit-allstudents');
 }
 }
  


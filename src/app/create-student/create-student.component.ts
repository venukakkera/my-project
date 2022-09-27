import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  
  public studentForm :FormGroup = new FormGroup({
    name : new FormControl(),
    phone : new FormControl(),
    email : new FormControl(),
    batch : new FormControl(),

    address : new FormGroup({
      city: new FormControl(),
      mandal:  new FormControl(),
      district :new FormControl(),
      state :new FormControl(),
      pin : new FormControl(),
    }),
  educations:new FormArray([]),
    
   company: new FormGroup({
     companyname:new FormControl(),
     location : new FormControl(),
     package :new FormControl(),
     offerdate :new FormControl(),
  })
});
get studentFormArray(){
  return this.studentForm.get('educations')as FormArray;
}
 public id: string='';
 public isEdit : boolean=false; 

constructor(private _studentService:StudentService,private _activatedRoute: ActivatedRoute ) { 
   this._activatedRoute.params.subscribe(
    (data: any) => {
      if (data.id) {
        this.id = data.id;
        this.isEdit = true;
          }
      else {
        this.isEdit = false;
      }
      this._studentService.createStudent(data.id).subscribe(
        (data2: any) => {
          this.studentForm.patchValue(data2);
        }
      )
    }
  )
}

ngOnInit(): void {
}

add() {
  this.studentFormArray.push(

    new FormGroup({
      qualification: new FormControl(),
      year: new FormControl(),
      percentage: new FormControl()
    })
  )
}

submit() {
  console.log(this.studentForm.value);

}
remove(i : number) {
  this.studentFormArray.removeAt(i);
}

}


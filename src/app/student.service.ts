import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  deleteStudent(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private _httpClient: HttpClient, private router:Router) { }
  getStudent():Observable<Student>{
    return this._httpClient.get<Student>('https://62b9299dff109cd1dc8ca34f.mockapi.io/students');
    
  }
  
  sortStudent(column:string,order:string):Observable<Student>{
    return this._httpClient.get<Student>('https://62b9299dff109cd1dc8ca34f.mockapi.io/students'+'?sortBy='+column+'&order='+order);
  }
  getFilterStudent(FilterTerm:string):Observable<Student>{
    return this._httpClient.get<Student>('https://62b9299dff109cd1dc8ca34f.mockapi.io/students'+'?filter='+FilterTerm);
    
  }
  getPagedStudent(pageNo:number):Observable<Student>{
    return this._httpClient.get<Student>('https://62b9299dff109cd1dc8ca34f.mockapi.io/students'+'limit=5&page='+pageNo);

  }  
  createStudent(data:any):Observable<Student>{
    return this._httpClient.post<Student>('https://62b9299dff109cd1dc8ca34f.mockapi.io/students',data);
    
  }
  updatedStudent(id:string,student:Student):Observable<Student>{
    return this._httpClient.put<Student>('https://62b9299dff109cd1dc8ca34f.mockapi.io/students'+'/'+id,student);
  }
  deleteStudents(id:string){
    return this._httpClient.delete('https://62b9299dff109cd1dc8ca34f.mockapi.io/students'+'/'+id);
}

}

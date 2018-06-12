import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  /*
  * Employee Details
  */
  public employeeDetails; 

  /**
   * constructor.
   * @param http
   * @param router
   */
  
  constructor(private http: HttpClient, private router: Router) { }

  /*
  * ngOnInit
  */
  ngOnInit() {
    this.http.get('http://localhost:3000/todolist').subscribe(
      (data) =>  this.employeeDetails = data
    )
  }

  /*
  * edit
  */
  public edit(id) {
    this.router.navigate(['edit/' +id]);
  }

  /*
  * delete
  */
  public delete(id) {
    this.http.get('http://localhost:3000/delete/'+id).subscribe(
      (data) =>  this.employeeDetails = data
    )
  }

  /*
  * add
  */
  public add() {
    this.router.navigate(['add']);
  }
  }

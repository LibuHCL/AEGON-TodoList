import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  /*
  * Employee form
  */
  public employeeForm: any;

  /*
  * params
  */
  public params: any;

  /*
  * params
  */
  public buttonLabel: string;

  /**
   * constructor.
   * @param formBuilder
   * @param router
   * @param http
   */

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.employeeForm = this.formBuilder.group({
      'id': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.required],
      'position': ['', Validators.required]
    });

    this.activatedRoute.params.subscribe( params => this.params = params );
    if(this.params.id) {
      this.buttonLabel = 'Edit';
      this.retriveEmployeeDetails(this.params.id);
    } else {      
      this.buttonLabel = 'Add';
    }
   }

  /*
  * ngOnInit
  */
  ngOnInit() {
  }

  /*
  * submit
  */
  public submit() {
    if (this.buttonLabel === 'Add') {
    this.http.post('http://localhost:3000/add', this.employeeForm.value).subscribe(
      (data) =>  {
        this.router.navigate(['list']);
      }
    ) 
    } else {
    this.http.post('http://localhost:3000/modify/', this.employeeForm.value).subscribe(
      (data) =>  {
        this.router.navigate(['list']);
      }
    )

    }
  }

  /*
  * retriveEmployeeDetails
  */
  public retriveEmployeeDetails(id) {
    this.http.get('http://localhost:3000/retrieve/'+id, this.employeeForm.value).subscribe(
      (data:any) =>  {
       this.employeeForm.id = data.data[0].id;
       this.employeeForm.firstName = data.data[0].firstName;
       this.employeeForm.lastName = data.data[0].lastName;
       this.employeeForm.email = data.data[0].email;
       this.employeeForm.position = data.data[0].position;
      }
    )
  }
}

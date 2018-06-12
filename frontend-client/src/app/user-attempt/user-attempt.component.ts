import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-attempt',
  templateUrl: './user-attempt.component.html',
  styleUrls: ['./user-attempt.component.css']
})
export class UserAttemptComponent implements OnInit {

  private userAttempt: string = '';

  private userMessage: string = '';

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.http.post('http://localhost:3000/userAttempt', {data: this.userAttempt}).subscribe(
      (data: any) =>  {
        console.log('got result: '+data);
            this.userMessage = data.message;
            if( this.userMessage === 'You tried three attempt. Redirecting to login page') {
              this.router.navigate(['login']);
            }
      });
  }

}

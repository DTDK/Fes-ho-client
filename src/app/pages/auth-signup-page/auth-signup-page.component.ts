import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-signup-page',
  templateUrl: './auth-signup-page.component.html',
  styleUrls: ['./auth-signup-page.component.css']
})
export class AuthSignupPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  username: String;
  password: String;

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    const data = {
      username: this.username,
      password: this.password
    };
    if (form.valid) {
      this.processing = true;
      this.authService.signup(data)
        .then((result) => {
          // ... handle result, reset form, etc...
          this.router.navigate(['/']) // user goes here after signup
        })
        .catch((err) => {
          this.error = err.error.error; // :-)
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}






  

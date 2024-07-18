import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../../../../Services/service-user.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  myForm: any;
  msg: any;


  constructor(private Userservice:ServiceUserService,
     private router: Router,
      private formBuilder: FormBuilder,
      ) {

  }
  myCustomValidator(control: FormControl): { [key: string]: boolean } | null {
    const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if the email is valid using the regular expression
    const isValid = EMAIL_REGEXP.test(control.value);

    // Return an object with the error code and message if the email is invalid
    return isValid ? null : { 'invalidEmail': true };
  }
  public ngSubmit() { }

  ngOnInit(): void {

    this.myForm = this.formBuilder.group({

      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],

      email: ['', [Validators.required, Validators.email, this.myCustomValidator]],
      // other form fields...
    });

  }


  login() {

  }

}


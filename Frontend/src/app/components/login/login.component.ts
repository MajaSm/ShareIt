import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';
import {NgToastService} from 'ng-angular-popup';
import { Subject } from 'rxjs';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string ="fa-eye-slash";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth:AuthService, private router:Router, private toast:NgToastService, private app:AppComponent) { }

  ngAfterViewInit(): void {
   
    this.app.Instance!.setNavBarVisiblity(false);
  }
 
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    
  }

  hideShowPass()
  {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon ="fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onLogin()
  {
    if(this.loginForm.valid){

      console.log(this.loginForm.valid);
      //send the obj to database
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res=>{
          
          this.toast.success({detail:"Success Message", summary:res.message, duration: 5000});
          this.loginForm.reset();
          
          this.app.Instance!.setNavBarVisiblity(true);
          this.router.navigate(['logedin-home-page']);
        }),
        error:(err=>{
          this.toast.error({detail:"Error Message", summary:"Email or password is incorrect!", duration: 5000});
        })
      })
    }
    else{
      //throw the error using toaster and with required fields
      ValidateForm.validateAllFormFields(this.loginForm);
      
      
    }
  }

 
}

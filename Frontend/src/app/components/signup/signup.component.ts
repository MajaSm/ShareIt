import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import { Route, Router, TitleStrategy } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  typeForFirst: string = "password";
  typeForSecond: string = "password";
  isTextForFirst: boolean = false;
  isTextForSecond: boolean = false;
  eyeIconForFirst: string ="fa-eye-slash"
  eyeIconForSecond: string ="fa-eye-slash"
  signForm!: FormGroup;
  validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  constructor(private fb:FormBuilder, private auth:AuthService, private router: Router, private toast:NgToastService) {
    
  }
 
  ngOnInit(): void {
    this.signForm = this.fb.group({
      username: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.validRegex)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*"]).{8,}')])],
      confirmPassword: ['', Validators.compose([Validators.required,Validators.minLength(8)])]

    },{
      validators:this.MustMatchPassword('password','confirmPassword')
    })
  }

  get f()
  {
    return this.signForm.controls;
  }

  MustMatchPassword(password:any, confirmPassword:any)
  {
    return(formGroup:FormGroup)=>{
      const passwordControl= formGroup.controls[password];
      const confirmPasswordControl= formGroup.controls[confirmPassword];

      if(confirmPasswordControl.errors && !confirmPasswordControl.errors['MustMatchPassword']){
        return;
      }

      if(passwordControl.value !== confirmPasswordControl.value)
      {
        confirmPasswordControl.setErrors({MustMatchPassword:true});
      }
      else{
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  hideShowPassForFirst()
  {
    this.isTextForFirst = !this.isTextForFirst;
    this.isTextForFirst ? this.eyeIconForFirst = "fa-eye" : this.eyeIconForFirst ="fa-eye-slash";
    this.isTextForFirst ? this.typeForFirst = "text" : this.typeForFirst = "password";
  }
  hideShowPassForSecond()
  {
    this.isTextForSecond = !this.isTextForSecond;
    this.isTextForSecond ? this.eyeIconForSecond = "fa-eye" : this.eyeIconForSecond ="fa-eye-slash";
    this.isTextForSecond ? this.typeForSecond = "text" : this.typeForSecond = "password";
  }
 
  
  
  onSumbit()
  {
    
    if(this.signForm.valid){
      console.log(this.signForm.value);
      //send the obj to database
      this.auth.signUp(this.signForm.value)
      .subscribe({
        next:(res=>{
          this.toast.success({detail:"Success Message", summary:res.message, duration: 5000});
          this.signForm.reset();
          this.router.navigate(['login']);
        }),
        error:(err=>{
          this.toast.error({detail:"Error Message", summary:err?.error.message, duration: 5000});
        })
      })
    }

    else{
      //throw the error using toaster and with required fields
      ValidateForm.validateAllFormFields(this.signForm);
      
    }
  }

 
}

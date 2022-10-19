import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';
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
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]

    })
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

    }
    else{
      //throw the error using toaster and with required fields
      ValidateForm.validateAllFormFields(this.signForm);
      alert("Your form is invalid");
    }
  }

 
}

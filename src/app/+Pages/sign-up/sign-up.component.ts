import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BackendSecurityService } from 'src/app/+Services/backend-security.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private backend: BackendSecurityService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private fb: FormBuilder,) { }
  masseage: string = '';
  busy: boolean = false;
  // keepMe: boolean = false;
  registerform = this.fb.group({
    // username: [''],
    // password: [''],
    // fullname: [''],
    // type: [''],
    username:['',[Validators.required,Validators.maxLength(11),Validators.minLength(8)]],
    password:['',[Validators.required,Validators.maxLength(100),Validators.minLength(8)]],
    fullname:['',[Validators.required,Validators.maxLength(100),Validators.minLength(2)]],
    type:['',[Validators.required]]
  });
  // registerform(){

  // }





  register() {
    this.busy = true;
    let username: string | undefined = this.registerform.controls.username.value?.toString();
    let password: string | undefined = this.registerform.controls.password.value?.toString();
    let type: number | undefined = Number(this.registerform.controls.type.value?.toString());
    let fullname: string | undefined = this.registerform.controls.fullname.value?.toString();
    this.backend.signup(username ?? '', password ?? '',fullname ?? '',type??2).subscribe(r => 
    {
      this._snackBar.open('ثبت با موفقیت انجام شد', '', {
        duration: 4000
      }).afterDismissed().subscribe(t=>{
        this.router.navigate(['/signin']);
      });
    });
    console.log(this.registerform)
  }
  keyone(PhoneNumber:KeyboardEvent){
    if (PhoneNumber.key=='a'){
      PhoneNumber.preventDefault();
    }
  }

  keytow(fullname:KeyboardEvent){
    if (fullname.key>='0' && fullname.key<='9') {
      fullname.preventDefault();
      
    }
  }
}


// registrationForm: FormGroup;

// constructor(private fb: FormBuilder) {
//   this.registrationForm = this.fb.group({
//     name: ['', Validators.required],
//     lastName: ['', Validators.required],
//     phoneNumber: ['', Validators.required],
//     password: ['', Validators.required]
//   });
// }
// onSubmit() {
//   // اطلاعات فرم اینجا ارسال شوند
// }


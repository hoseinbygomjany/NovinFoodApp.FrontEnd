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
    private fb: FormBuilder) { }
  masseage: string = '';
  busy: boolean = false;
  keepMe: boolean = false;
  usernameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  check() {
    this.busy = true;
    let username: string | undefined = this.usernameFormControl.value?.toString();
    let password: string | undefined = this.passwordFormControl.value?.toString();
    this.backend.signin(username ?? '', password ?? '').subscribe(r => {

      let result = r as any;
      if (result.isOk == false) {
        this.masseage = (r as any).masseage;
        this._snackBar.open(this.masseage, '', {
          duration: 4000
        });
        this.passwordFormControl.setValue('');
      }
      else {
        sessionStorage.setItem('token', result.token);
        if (this.keepMe == true) {
          localStorage.setItem('token', result.token);
        }
        switch (result.type) {
          case 'systemAdmin':
            this.router.navigate(['/admins']);
            break;
          case 'RestaurantOwner':
            this.router.navigate(['/restaurants']);
            break;
          case 'Customer':
            this.router.navigate(['/customers']);
            break;
        }
      }
      this.busy = false;
    });
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
}

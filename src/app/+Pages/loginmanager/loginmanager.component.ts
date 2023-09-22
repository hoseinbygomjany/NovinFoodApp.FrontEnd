import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BackendSecurityService } from 'src/app/+Services/backend-security.service';

@Component({
  selector: 'app-loginmanager',
  templateUrl: './loginmanager.component.html',
  styleUrls: ['./loginmanager.component.css']
})
export class LoginmanagerComponent {
  constructor(private backend: BackendSecurityService,
    private _snackBar: MatSnackBar,
    private router: Router) { }
  masseage: string = '';
  busy: boolean = false;
  keepMe: boolean = false;
  usernameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  check() {
    this.busy = true;
    let username: string | undefined = this.usernameFormControl.value?.toString();
    let password: string | undefined = this.passwordFormControl.value?.toString();
    this.backend.loginmanager(username ?? '', password ?? '').subscribe(r => {

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
        }
      }
      this.busy = false;
    });
  }


}

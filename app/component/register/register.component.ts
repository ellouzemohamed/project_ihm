import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Global } from 'src/app/global';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formdataRegister = new FormGroup({
    email: new FormControl('', [Validators.email]),
    name: new FormControl('', [Validators.min(3) ]),
    username: new FormControl('', [Validators.min(6) ]),
    password: new FormControl('', [Validators.min(9) ]),
    isfournisseur: new FormControl('', [ ]),

 });
 controls = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    Remember: new FormControl('', [ Validators.required ]),

  });
  constructor(private http: HttpClient , private authService: AuthService , private router: Router) { }
  global = new Global() ;
  errors;
  successControll;
  loading;
  ngOnInit(): void {
  }
    // tslint:disable-next-line:typedef
  onClickSubmit(data) {
    this.http.post(this.global.apiURL + 'api/register' , this.formdataRegister.value).subscribe(sucess => {
        this.successControll = true;
        this.errors = null;
        this.formdataRegister.reset();
    }, error  => {
      this.errors = JSON.parse(Object(error).error.error);
      console.log(error);
    });

  }

  login(): void {

    //if (this.controls.valid) {
      this.loading = true;
      this.errors = false;
      this.authService.login(this.controls.get('email').value, this.controls.get('password').value)
        .subscribe((res: any) => {
          console.log(true);
          // Store the access token in the localstorage
          localStorage.setItem('access_token', res.access_token);
          this.loading = false;
          // Navigate to home page
          this.router.navigate(['/loginin']);
          document.getElementById('close').click();
        }, (err: any) => {
          // This error can be internal or invalid credentials
          // You need to customize this based on the error.status code
          console.log(err);
          this.loading = false;
          this.errors = true;
        });
    //} else {
  //    this.errors = true;
 //   }

  }
}

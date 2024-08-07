import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  form = this.formBuilder.group({
    email: ['', [Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],

  })
 constructor(private authService : AuthService ,
             private formBuilder: FormBuilder,
             private route : Router
){}

onSubmit(){
if(this.form.invalid) return;
this.authService.signup({
  email: this.form.value.email!,
  password: this.form.value.password!
}).subscribe((user) => {
  alert('Đăng ký thanh cong');
  this.route.navigateByUrl('/signin');
});
}
}

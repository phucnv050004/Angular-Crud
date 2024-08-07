import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sigin',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './sigin.component.html',
  styleUrl: './sigin.component.css'
})
export class SiginComponent {
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
this.authService.signin({
  email: this.form.value.email!,
  password: this.form.value.password!
}).subscribe((user) => {
  alert('Đăng nhập thanh cong');
  localStorage.setItem('user',JSON.stringify(user));
  this.route.navigateByUrl('/');
});
}
}

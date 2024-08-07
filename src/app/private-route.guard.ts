import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const privateRouteGuard: CanActivateFn = (route, state) => {
 const router = inject(Router);

 const user = JSON.parse(localStorage.getItem('user') || '{}');
 if (user.user.id !== 1) {
 router.navigateByUrl("/")
 return false;
 }else{
  return true;
 }
};

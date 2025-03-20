import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let auth = inject(AuthService);
  if(auth.userData.getValue().iat !== 0) {
    return true;
  } else {
    router.navigate(['/login']);
    return false
  }
};

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  AuhtNext = new Subject<boolean>();

  constructor(private router:Router) { }

  login(email: string, password: string): boolean{
    console.log(email+ ' ' + password);
    if (email == "luis@gmail.com" && password == "12345") {
      this.isLoggedIn = true;
      this.router.navigate(['/recipes']);
    } else {
      this.isLoggedIn = false;
    }
    this.AuhtNext.next(this.isLoggedIn);
    return this.isLoggedIn;
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }

  isxD() {
    this.isLoggedIn = false;
    this.AuhtNext.next(this.isLoggedIn);
  }

}

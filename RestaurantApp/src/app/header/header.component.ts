import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../guards/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  editMode = false;
  constructor(private authService: AuthService) { }
  private subscription: Subscription;

  ngOnInit() {
    this.editMode = this.authService.isUserLoggedIn();
    this.subscription = this.authService.AuhtNext.subscribe(
      (element: boolean) => {
        this.editMode = element;
      }
    );
  }

  Cambio() {
    this.authService.isxD();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

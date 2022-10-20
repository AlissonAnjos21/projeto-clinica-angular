import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-clinica-angular';
  constructor(
    private router: Router,
    protected login: LoginService) {}

  onAdministrator() {
    // console.log('Working...');
    this.router.navigate(['administradores']);
  }

  onDoctor() {
    // console.log('Working...');
    this.router.navigate(['']);
  }

  onPatient() {
    // console.log('Working...');
    this.router.navigate(['']);
  }

  onAppointment() {
    // console.log('Working...');
    this.router.navigate(['consultas']);
  }

}

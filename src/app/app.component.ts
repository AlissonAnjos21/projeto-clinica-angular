import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-clinica-angular';
  constructor(private router: Router) {}

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
    this.router.navigate(['']);
  }

}

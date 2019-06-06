import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: Observable<firebase.User>; //Making asyncronous way of looking the value/variable

  constructor(public fAuth:AngularFireAuth, public router: Router) { 
    this.user=this.fAuth.authState;
    console.log(this.user);
  }

  ngOnInit() {
  }
  signOut() {
    this.fAuth.auth.signOut();
    this.router.navigate(['/']);  //this is built-in method
  }

}


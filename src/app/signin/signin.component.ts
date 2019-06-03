import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email:string;
  password:string;
  invalidForm:boolean;


  constructor(public router:Router, public fAuth:AngularFireAuth) { }

  ngOnInit() {
  }

  login() {
    this.fAuth.auth.signInWithEmailAndPassword(this.email, this.password)
    .then(value =>{
      this.router.navigate(['/travel'])
    })

    .catch(err =>{
      this.invalidForm=true;
    });
  }

}



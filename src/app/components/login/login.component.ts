import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {LoginService} from "../../services/LoginService";
import {State} from "../../reducers/app.reducer";
import {Store} from "@ngrx/store";
import {Login} from "../../actions/auth.action";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private store: Store<State>,
              public router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  login() {
    const loginData = this.loginForm.value;

    this.loginService.login(loginData).subscribe(value => {
      this.store.dispatch(new Login(value));
    });
  }
}

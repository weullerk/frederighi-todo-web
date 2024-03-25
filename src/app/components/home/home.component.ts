import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AuthModel} from "../../models/AuthModel";
import {Store} from "@ngrx/store";
import {State} from "../../reducers/app.reducer";
import {TarefasComponent} from "../tarefas/tarefas.component";
import {LoginComponent} from "../login/login.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TarefasComponent,
    LoginComponent,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  login$: Observable<AuthModel>;
  authenticated = false;

  constructor(private store: Store<State>) {
  }

  ngOnInit(){
    this.login$ = this.store.select((store) => store.auth);

    this.login$.subscribe(value => {
      this.authenticated = value.access_token != '';
    })

  }
}

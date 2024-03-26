import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {State} from "../reducers/app.reducer";
import {map, Observable, take} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AuthState, getAuth} from "../reducers/auth.reducer";

@Injectable()
export class AuthGuard implements CanActivate {
  authStore$: Observable<AuthState>

  constructor(private store: Store<State>, private router: Router) {}
  canActivate(): Observable<boolean> {
    this.authStore$ = this.store.select((store) => store.auth)

    return this.store.pipe(
      select(getAuth),
      take(1),
      map((auth) => {
        if (auth.access_token == '') {
          this.router.navigate(['./']);
        }
        return true;
      })
    );
  }
}

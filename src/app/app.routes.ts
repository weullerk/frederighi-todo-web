import { Routes } from '@angular/router';
import {CadastroComponent} from "./components/cadastro/cadastro.component";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastrar', component: CadastroComponent },
];

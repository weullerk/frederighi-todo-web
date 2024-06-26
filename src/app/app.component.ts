import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {CadastroComponent} from "./components/cadastro/cadastro.component";
import {TarefasComponent} from "./components/tarefas/tarefas.component";
import {CadastrarTarefaComponent} from "./components/cadastrar-tarefa/cadastrar-tarefa.component";
import {ExcluirTarefaComponent} from "./components/excluir-tarefa/excluir-tarefa.component";
import {EditarTarefaComponent} from "./components/editar-tarefa/editar-tarefa.component";
import {CadastroService} from "./services/CadastroService";
import {HttpClientModule} from "@angular/common/http";
import {LoginService} from "./services/LoginService";
import {TarefaService} from "./services/TarefaService";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    LoginComponent,
    CadastroComponent,
    TarefasComponent,
    CadastrarTarefaComponent,
    ExcluirTarefaComponent,
    EditarTarefaComponent],
  providers: [CadastroService, LoginService, TarefaService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frederigh-todo-web';
}

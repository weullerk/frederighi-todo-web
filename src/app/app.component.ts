import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {CadastroComponent} from "./components/cadastro/cadastro.component";
import {TarefasComponent} from "./components/tarefas/tarefas.component";
import {CadastrarTarefaComponent} from "./components/cadastrar-tarefa/cadastrar-tarefa.component";
import {ExcluirTarefaComponent} from "./components/excluir-tarefa/excluir-tarefa.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, CadastroComponent, TarefasComponent, CadastrarTarefaComponent, ExcluirTarefaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frederigh-todo-web';
}

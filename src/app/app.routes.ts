import { Routes } from '@angular/router';
import {CadastroComponent} from "./components/cadastro/cadastro.component";
import {HomeComponent} from "./components/home/home.component";
import {TarefasComponent} from "./components/tarefas/tarefas.component";
import {CadastrarTarefaComponent} from "./components/cadastrar-tarefa/cadastrar-tarefa.component";
import {EditarTarefaComponent} from "./components/editar-tarefa/editar-tarefa.component";
import {ExcluirTarefaComponent} from "./components/excluir-tarefa/excluir-tarefa.component";
import {AuthGuard} from "./guards/AuthGuard";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastrar', component: CadastroComponent },
  { path: 'cadastrar-tarefa', component: CadastrarTarefaComponent, canActivate: [AuthGuard] },
  { path: 'editar-tarefa', component: EditarTarefaComponent, canActivate: [AuthGuard] },
  { path: 'excluir-tarefa', component: ExcluirTarefaComponent, canActivate: [AuthGuard] },
  // { path: 'cadastrar-tarefa', component: CadastrarTarefaComponent },
  // { path: 'editar-tarefa', component: EditarTarefaComponent },
  // { path: 'excluir-tarefa', component: ExcluirTarefaComponent },
];

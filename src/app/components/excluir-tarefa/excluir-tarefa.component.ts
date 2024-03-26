import {Component, OnInit} from '@angular/core';
import {TarefaService} from "../../services/TarefaService";
import {Store} from "@ngrx/store";
import {State} from "../../reducers/app.reducer";
import {ActivatedRoute, ParamMap, Router, RouterLink} from "@angular/router";
import {AuthState} from "../../reducers/auth.reducer";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-excluir-tarefa',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './excluir-tarefa.component.html',
  styleUrl: './excluir-tarefa.component.scss'
})
export class ExcluirTarefaComponent implements OnInit {
  id: number;
  authState: AuthState;
  descricao: string;
  operationMessage: string = '';

  constructor(private tarefaService: TarefaService,
              private store: Store<State>,
              private route: ActivatedRoute,
              public router: Router) {
  }

  ngOnInit() {
    this.store.select((store) => store.auth).subscribe(value => {
      this.authState = value;

      this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = +params.get('id')!;

        this.tarefaService.exibirTarefa(this.id, this.authState.access_token). subscribe((value) => {
          this.descricao = value.tarefa.descricao;
        });
      });
    });
  }

  excluirTarefa() {
    this.tarefaService.excluir(this.id, this.authState.access_token).subscribe(response => {
        if (response.message) {
          this.operationMessage = response.message;
        }
    });
  }
}

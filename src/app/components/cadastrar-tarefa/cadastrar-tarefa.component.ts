import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Store} from "@ngrx/store";
import {State} from "../../reducers/app.reducer";
import {AuthState} from "../../reducers/auth.reducer";
import {TarefaService} from "../../services/TarefaService";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrl: './cadastrar-tarefa.component.scss'
})
export class CadastrarTarefaComponent implements OnInit {
  cadastrarTarefaForm: FormGroup;
  responseMessage: string = '';
  authStoreState: AuthState;

  constructor(private fb: FormBuilder, private store: Store<State>, private tarefaService: TarefaService, public router: Router) {
  }

  ngOnInit(): void {
    this.cadastrarTarefaForm = this.fb.group({
      descricao: ['', Validators.required],
    });

    this.store.select((store) => store.auth).subscribe(value => {
      this.authStoreState = value;
    });
  }

  cadastrarTarefa() {
    const formData = this.cadastrarTarefaForm.value;
    this.tarefaService.cadastrarTarefa(formData, this.authStoreState.access_token)
      .subscribe(value => {
        if (value.message) {
          this.responseMessage = value.message;
        }
    })
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TarefaService} from "../../services/TarefaService";
import {State} from "../../reducers/app.reducer";
import {Store} from "@ngrx/store";
import {AuthState} from "../../reducers/auth.reducer";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {RequestResponseModel} from "../../models/RequestResponseModel";
import {TarefaModel} from "../../models/TarefaModel";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-editar-tarefa',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './editar-tarefa.component.html',
  styleUrl: './editar-tarefa.component.scss'
})
export class EditarTarefaComponent implements OnInit {
  editarTarefaForm: FormGroup;
  authState: AuthState;
  id: number;
  tarefa: TarefaModel;
  descricao: string;
  status: string;
  operationResponse: string = '';
  errorResponse: string = '';

  constructor(private fb: FormBuilder,
    private tarefaService: TarefaService,
    private store: Store<State>,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.editarTarefaForm = this.fb.group({
      descricao: ['', Validators.required],
      status: ['', Validators.required],
    });

    this.store.select((store) => store.auth).subscribe(value => {
      this.authState = value;

      this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = +params.get('id')!;

        this.tarefaService.exibirTarefa(this.id, this.authState.access_token). subscribe((value) => {
          this.tarefa = value;
          this.descricao = this.tarefa.tarefa.descricao;
          this.status = this.tarefa.tarefa.status;
          this.editarTarefaForm.get('descricao')?.setValue(this.tarefa.tarefa.descricao)
          this.editarTarefaForm.get('status')?.setValue(this.tarefa.tarefa.status)
        });
      });
    });
  }

  editarTarefa() {
    const formData = this.editarTarefaForm.value;

    this.tarefaService.editar(this.id, formData, this.authState.access_token).subscribe((response) => {
      if (response.message) {
        this.operationResponse = response.message;
      }
      if (response.error) {
          this.errorResponse = response.error;
      }
    })
  }
}

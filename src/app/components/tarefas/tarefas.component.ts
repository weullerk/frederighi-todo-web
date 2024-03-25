import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {TarefaService} from "../../services/TarefaService";
import {State} from "../../reducers/app.reducer";
import {Store} from "@ngrx/store";
import {TarefasModel} from "../../models/TarefasModel";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.scss'
})
export class TarefasComponent implements OnInit {
  tarefas: TarefasModel|null = null;

  constructor(private store: Store<State>, private tarefaService: TarefaService, public router: Router) {
  }

  ngOnInit() {
    const store = this.store.select((store) => store.auth);

    store.subscribe(value => {
      const listarTarefas = this.tarefaService.listarTarefas(value.access_token);

      listarTarefas.subscribe(value => {
        this.tarefas = value;
        console.log(this.tarefas);
      });
    });
  }
}

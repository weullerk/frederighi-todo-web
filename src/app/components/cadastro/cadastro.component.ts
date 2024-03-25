import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {CadastroService} from "../../services/CadastroService";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private cadastroService: CadastroService) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required, this.cadastroService.validateEmailExists.bind(this.cadastroService)],
      senha: ['', Validators.required]
    })
  }

}

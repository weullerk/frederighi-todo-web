import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../enviroments/enviroment";
import {Injectable} from "@angular/core";
import {AuthModel} from "../models/AuthModel";
import {RequestResponseModel} from "../models/RequestResponseModel";
import {TarefasModel} from "../models/TarefasModel";

@Injectable()
export class TarefaService {
  constructor(private httpClient: HttpClient) {}

  cadastrarTarefa(formData: any, token: string): Observable<RequestResponseModel> {
    const url = environment.apiUrl + 'cadastrar-tarefa';

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: headers };

    return this.httpClient.post<RequestResponseModel>(url, formData, requestOptions);
  }

  listarTarefas(token: string): Observable<TarefasModel> {
    const url = environment.apiUrl + 'tarefas';

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = { headers: headers };

    return this.httpClient.get<TarefasModel>(url, requestOptions);
  }
}

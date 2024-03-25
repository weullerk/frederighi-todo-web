import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {VerificarEmailModel} from "../models/VerificarEmailModel";
import {environment} from "../../enviroments/enviroment";
import {VerificarEmailFormDataModel} from "../models/VerificarEmailFormDataModel";
import {Injectable} from "@angular/core";
import {FormControl} from "@angular/forms";
import {AuthModel} from "../models/AuthModel";

@Injectable()
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(formData: any): Observable<AuthModel> {
    const url = environment.apiUrl + 'login';

    return this.httpClient.post<AuthModel>(url, formData);
  }
}

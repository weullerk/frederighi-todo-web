import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {VerificarEmailModel} from "../models/VerificarEmailModel";
import {environment} from "../../enviroments/enviroment";
import {VerificarEmailFormDataModel} from "../models/VerificarEmailFormDataModel";
import {Injectable} from "@angular/core";
import {FormControl} from "@angular/forms";

@Injectable()
export class CadastroService {
  constructor(private httpClient: HttpClient) {}

  verificarEmail(email: any): Observable<VerificarEmailModel> {
    const url = environment.apiUrl + 'verificar-email';
    const formData: VerificarEmailFormDataModel = {
      email: email
    };

    return this.httpClient.post<VerificarEmailModel>(url, formData);
  }
  validateEmailExists(input: FormControl): Observable<any> {
    return this.verificarEmail(input.value).pipe(
      map((response: VerificarEmailModel) => {
        if (response.exists && response.exists == 'true') {
          return { emailExists: true };
        }
        return null;
      })
    );
  }
}

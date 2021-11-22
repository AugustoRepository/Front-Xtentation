import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-funcionario',
  templateUrl: './login-funcionario.component.html',
  styleUrls: ['./login-funcionario.component.css']
})
export class LoginFuncionarioComponent implements OnInit {
  mensagemErro: string | undefined;
  errosEmail = [];
  errosSenha = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  autenticar(formLogin: any): void {
    this.fecharMensagens();


    console.log(formLogin.form.value)
    this.errosEmail = [];
    this.errosSenha = [];

    this.httpClient.post(environment.apiUrl + "/LoginFuncionario", formLogin.form.value)
      .subscribe(
        (data: any) => {
          window.localStorage.setItem("ACCESS_TOKEN", data.accessToken);
            console.log(data.accessToken);
          window.location.href = "/#";
        },
        (e: any) => {
          switch (e.status) {
            case 400:
              var result = e.error;
              var mensagens = result.errors;

              this.errosEmail = mensagens.Email;
              this.errosEmail = mensagens.Senha;
              break;
            case 500:
              this.mensagemErro = e.error;
              break;
          }
        }
      )
  }

  fecharMensagens(): void {
    this.mensagemErro = "";
  }
}

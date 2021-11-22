import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  mensagemSucesso: string | undefined;
  mensagemErro: string | undefined;

  errosNome = [];
  errosEmail = [];
  errosSenha = [];
  errosSenhaConfirmacao = [];
  errosTelefone = [];
  errosTelefone2 = [];
  errosDataNascimento = [];
  errosIdPerfil = [];

  ListagemPerfis: any

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl + "/perfil")
      .subscribe(
        (data) => {
          console.log(data);
          this.ListagemPerfis = data;
        },
        (e: any) => {
          console.log(e);
        }
      )
  }
  cadastrarFuncionario(formCadastroFun :any): void {    

      console.log(formCadastroFun.form.value);
      this.httpClient.post(environment.apiUrl + "/funcionario", formCadastroFun.form.value,
      {responseType: "text"}).subscribe(
        (data) => {
          this.mensagemSucesso = data;

          formCadastroFun.form.reset();
          window.location.href = "/login-funcionario";
        },
        (e) =>{
          switch(e.status){
            case 400:
              var result = JSON.parse(e.error);
              var mensagas = result.errors;

              this.errosNome = mensagas.Nome;
              this.errosEmail = mensagas.Email;
              this.errosSenha = mensagas.Senha;
              this.errosSenhaConfirmacao = mensagas.SenhaConfirmacao;
              this.errosTelefone = mensagas.Telefone;
              this.errosTelefone2 = mensagas.Telefone2;
              this.errosDataNascimento = mensagas.DataNascimento;
              break;
              case 500:
                this.mensagemErro = e.error;
                break;
          }
        })
  }

  fecharMensasgens() :void{
    this.mensagemSucesso = "";
    this.mensagemErro = "";
  }
}


import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

 
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

  constructor(private httpClient :HttpClient ){ }

  ngOnInit(): void {
  }

  cadastrarFuncionario(formCadastroCli :any): void {    

    console.log(formCadastroCli.form.value);
    this.httpClient.post(environment.apiUrl + "/cliente", formCadastroCli.form.value,
    {responseType: "text"}).subscribe(
      (data) => {
        this.mensagemSucesso = data;
        formCadastroCli.form.reset();
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

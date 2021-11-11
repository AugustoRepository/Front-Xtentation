import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {
  mensagemSucesso: string | undefined;
  mensagemErro: string | undefined;

  constructor(private httpClient :HttpClient ){ }

  ngOnInit(): void {
  }

  
  cadastrarFuncionario(formCadastro : {form: {valeu: any;};}) : void {
    this.mensagemSucesso = "";
    this.mensagemErro = "";

    console.log(formCadastro.form.valeu);

    this.httpClient.post('http://localhost:12429/api/Funcionario', formCadastro.form.valeu, {responseType : 'text'})
    .subscribe(success =>{
      this.mensagemSucesso = success;
    },
    e=>{
      this.mensagemErro = "Ocorreram erros, tente novamente";
    });
  }
  
  fecharMensagemSucesso() : void{
    this.mensagemSucesso = "";
  }

  fecharMensagemErro() : void{
    this.mensagemErro = "";
  }
  
}


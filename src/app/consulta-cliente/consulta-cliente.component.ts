import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent implements OnInit {


  mensagemSucesso: string | undefined;
  mensagemErro: string | undefined;
  listagemPessoas: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('').subscribe(
      (data) => {
        console.log(data)
        this.listagemPessoas = data;
      },
      e => {
        console.log(e);
      }
    )
  }

  obterCliente(id: string): void {


    this.httpClient.get('' + id).subscribe(
      (data: any) => {


      },
      e => {
        this.mensagemErro = "Ocorreu um erro ao obter a Pessoa. tente novamente.";
      }
    )
  }

  excluirPessoa(id: any): void {
    if (confirm('deseja realmente excluir a pessoa selecionada')) {
      this.httpClient.delete('' + id, { responseType: 'text' }).subscribe(
        success => {
          this.mensagemSucesso = success;
          this.ngOnInit();
        }
      )
    }
  }

  atualizarPessoa(formEdicao: { form: { value: any; }; }): void {
    this.httpClient.put('', formEdicao.form.value,
      { responseType: 'text' })
      .subscribe(
        success => {
          this.mensagemSucesso = success;
          this.ngOnInit();
        },
        e => {
          var response = JSON.parse(e.error);

          if (response.status == 400) {

          }
          this.mensagemErro = 'Ocorreram erros , por favor tente novamente.';
        });
  }


  fecharMensagemSucesso(): void {
    this.mensagemSucesso = "";
  }
  fecharMensagemErro(): void {
    this.mensagemErro = "";
  }

}

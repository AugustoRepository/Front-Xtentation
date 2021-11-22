import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

// apenas para clintes 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarioAutenticao = false;
  dados = {
    idCliente: 0, idFuncionario : 0, nome: '', email: ''
  }
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    var access_token = window.localStorage.getItem('ACCESS_TOKEN');

    if (access_token != null) {
      this.usuarioAutenticao =true;

      this.httpClient.get(environment.apiUrl +"/cliente", {headers : new HttpHeaders()
      .set('Autotization', 'Bearer' + access_token)})
      .subscribe(
        (data :any) => {
          this.dados = data;
        },
        (e:any)=> {
          console.log(e);
        }
      )
    }
  }

  logout() :void{
    if(window.confirm('deseja realmente sair do sistema?')){
      window.localStorage.removeItem('ACCESS_TOKEN');

      window.location.href ="/";
    }
  }
}

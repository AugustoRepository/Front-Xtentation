import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { LoginFuncionarioComponent } from './login-funcionario/login-funcionario.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { ConsultaFuncionarioComponent } from './consulta-funcionario/consulta-funcionario.component';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';
import {RouterModule, Routes} from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component'


const appRoutes: Routes= [
  {path : 'cadastro-cliente', component : CadastroClienteComponent},
  {path : 'consulta-cliente', component : ConsultaClienteComponent},
  {path : 'login-cliente', component : LoginClienteComponent},
  {path : 'cadastro-funcionario', component : CadastroFuncionarioComponent},
  {path : 'cadastro-produto', component : CadastroProdutoComponent},
  {path : 'consulta-funcionario', component : ConsultaFuncionarioComponent},
  {path : 'login-funcionario', component : LoginFuncionarioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginClienteComponent,
    LoginFuncionarioComponent,
    CadastroClienteComponent,
    CadastroFuncionarioComponent,
    ConsultaFuncionarioComponent,
    ConsultaClienteComponent,
    CadastroProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

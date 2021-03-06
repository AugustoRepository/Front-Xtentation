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
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroEnderecoComponent } from './cadastro-endereco/cadastro-endereco.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeFuncionarioComponent } from './home-funcionario/home-funcionario.component';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';
import { GerenciarClientesComponent } from './gerenciar-clientes/gerenciar-clientes.component';
import { GerenciarComprasComponent } from './gerenciar-compras/gerenciar-compras.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ComprasComponent } from './compras/compras.component';


const appRoutes: Routes= [
  {path : 'cadastro-cliente', component : CadastroClienteComponent},
  {path : 'consulta-cliente', component : ConsultaClienteComponent},
  {path : 'login-cliente', component : LoginClienteComponent},
  {path : 'cadastro-funcionario', component : CadastroFuncionarioComponent},
  {path : 'cadastro-produto', component : CadastroProdutoComponent},
  {path : 'consulta-funcionario', component : ConsultaFuncionarioComponent},
  {path : 'login-funcionario', component : LoginFuncionarioComponent},
  {path : 'home-funcionario', component : HomeFuncionarioComponent}
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
    CadastroProdutoComponent,
    CadastroEnderecoComponent,
    HomeFuncionarioComponent,
    HomeClienteComponent,
    GerenciarProdutosComponent,
    GerenciarClientesComponent,
    GerenciarComprasComponent,
    CarrinhoComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

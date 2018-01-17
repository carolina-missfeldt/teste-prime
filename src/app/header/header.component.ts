import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Cadastro', icon: 'fa-check',expanded: true,
        items: 
          [
            {
              label: 'Parceiros',

            },
            {
              label: 'Clientes',

            }
          ,
          
            {
              label: 'Sistema',
              items: [{ label: 'Grupos' }, { label: 'Permissões' }, { label: 'Usuários' }]
            }
          
          ]
      },
      {
        label: 'Financeiro', icon: 'fa-check',expanded: true,
        items: 
          [
            {
              label: 'Fluxo de Caixa',
              items: [
                { label: 'Consolidado' },
                { label: 'Estornos de transações ' },
                { label: 'Fechamento com parceiro' },
                { label: 'Movimentos (entradas e saídas)' }
              ]
            },
            {
              label: 'Remessa',
              items: [
                { label: 'Exportar (para processadora)' },
                { label: 'Importar do SIG (cargas)' }
              ]
            },

          ]
        
      },
      {
        label: 'Operacional', icon: 'fa-check',expanded: true,
        items: 
          [
            {
              label: 'Cartões',
              items: [
                { label: 'Dados gerais' },
                { label: 'Envios de chave de acesso' },
                { label: 'Por cliente' }
              ]
            },
            {
              label: 'SAC',
              items: [{ label: 'Chamados' }]
            },
            {
              label: 'Solicitações',
              items: [
                { label: 'Resumo de transações' },
                { label: 'Cartões de premiação' },
                { label: 'Loja' },
                { label: 'Vales presente' }
              ]
            }
          ]
      },
      {
        label: 'Opções', icon: 'fa-cog',expanded: true,
        items: 
          [
            { label: 'Painel de informações' },
            { label: 'Alterar senha' }
          ]
      }
    ];
  }



}

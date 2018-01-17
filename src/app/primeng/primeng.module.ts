import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {SidebarModule} from 'primeng/primeng';
import {MenuModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/primeng';
import { DataTableModule } from 'primeng/components/datatable/datatable';


@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    SidebarModule,
    MenuModule,
    PanelMenuModule,
    DataTableModule
    
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    SidebarModule,
    MenuModule,
    PanelMenuModule,
    DataTableModule
  ],
  declarations: []
})
export class PrimengModule { }

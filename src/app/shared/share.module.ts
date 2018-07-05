import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@NgModule({
    imports: [
        CommonModule,
        RouterModule
     ],
    declarations: [
        SidebarComponent,
        MenuComponent
    ],
    exports: [
        SidebarComponent,
        MenuComponent
    ]
})


export class SharedModule { }

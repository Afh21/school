import { DASHBOARD_ROUTES } from './pages.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './user/users.component';
import { InventoryComponent } from './inventory/inventory.component';
import { GroupsComponent } from './config/groups/groups.component';
import { ObjectsComponent } from './config/objects/objects.component';
import { DashboardComponent } from './dashboard.component';

import { SharedModule } from '../shared/share.module';
import { IndexComponent } from './index/index.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({

    imports: [
        CommonModule,
        RouterModule,
        DASHBOARD_ROUTES,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        DashboardComponent,
        UsersComponent,
        InventoryComponent,
        GroupsComponent,
        ObjectsComponent,
        IndexComponent
     ],
    exports: [
        DashboardComponent,
        FormsModule,
        ReactiveFormsModule
     ]

})

export class DashboardModule { }

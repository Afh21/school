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

<<<<<<< HEAD
=======
import { NgSelectModule } from '@ng-select/ng-select';
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
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
<<<<<<< HEAD
        HttpClientModule
=======
        HttpClientModule,
        NgSelectModule
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
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
<<<<<<< HEAD
        DashboardComponent,
        FormsModule,
        ReactiveFormsModule
=======
        DashboardComponent
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
     ]

})

export class DashboardModule { }

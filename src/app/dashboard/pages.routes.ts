import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './user/users.component';
import { InventoryComponent } from './inventory/inventory.component';
import { GroupsComponent } from './config/groups/groups.component';
import { ObjectsComponent } from './config/objects/objects.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: 'dashboard', component: IndexComponent },
            { path: 'dashboard/users',     component: UsersComponent     },
            { path: 'dashboard/inventory', component: InventoryComponent },
            { path: 'dashboard/config/group', component: GroupsComponent },
            { path: 'dashboard/config/objects', component: ObjectsComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];

export const DASHBOARD_ROUTES = RouterModule.forChild(pagesRoutes);

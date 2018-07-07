import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [

<<<<<<< HEAD
    { path: 'login', component: LoginComponent }
=======
<<<<<<< HEAD
    { path: 'login', component: LoginComponent }
=======
    { path: 'login',    component: LoginComponent }
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
>>>>>>> Afh21-master

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true });

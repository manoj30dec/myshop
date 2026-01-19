import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Registration } from './pages/registration/registration';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        data: { title: 'Welcome to iSadarBazar' }
    },
    {
        path: 'home',
        component: Home,
        data: { title: 'Welcome to iSadarBazar' }
    },
    {
        path: 'login',
        component: Login,
        data: { title: 'Login - iSadarBazar' }
    },
    {
        path: 'registration',
        component: Registration,
        data: { title: 'Registration - iSadarBazar' }
    },
    {
        path: "products",
        loadComponent: () => import('./pages/products/products').then(m => m.Products),
        data: { title: 'Products - iSadarBazar' }
    }

];

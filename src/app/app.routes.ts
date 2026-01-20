import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Registration } from './pages/registration/registration';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { authGuardGuard } from './services/auth/auth-guard-guard';
import { MainLayout } from './layout/main-layout/main-layout';
import { AuthLayout } from './layout/auth-layout/auth-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                component: Home,
                data: { title: 'Welcome to iSadarBazar' },
                //canActivate: [authGuardGuard]
            },
            {
                path: 'home',
                component: Home,
                data: { title: 'Welcome to iSadarBazar' },
                //canActivate: [authGuardGuard]
            },
            {
                path: "products",
                loadComponent: () => import('./pages/products/products').then(m => m.Products),
                data: { title: 'Products - iSadarBazar' }
            },
            {
                path: "product-detail",
                loadComponent: () => import('./pages/product-detail/product-detail').then(m => m.ProductDetail),
                data: { title: 'Product Detail - iSadarBazar' }
            },

        ]
    },
    {
        path: '',
        component: AuthLayout,
        children: [
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
        ]
    },
    {
        path: "**",
        component: PageNotFound,
        data: { title: "Page not found - iSadarBazaar" }
    },



];

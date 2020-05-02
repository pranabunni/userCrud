import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { CanActivateRouteGuard } from './guards/auth.guard';
import { LoggedGuard } from './guards/logged.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
        canActivate: [LoggedGuard]
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate: [CanActivateRouteGuard]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { SiginComponent } from './pages/sigin/sigin.component';
import { SingupComponent } from './pages/singup/singup.component';
import { privateRouteGuard } from './private-route.guard';

export const routes: Routes = [
    {path:"",component:ProductListComponent},
    {path:"add",component:ProductAddComponent, canActivate:[privateRouteGuard]},
    {path:"edit/:id",component:ProductEditComponent},
    {path:"signin",component:SiginComponent},
    {path:"signup",component:SingupComponent}
];

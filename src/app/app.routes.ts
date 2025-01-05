import { EmployeeComponent } from './employee/employee.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PresenceComponent } from './employee/presence/presence.component';
import { HistoriqueComponent } from './employee/historique/historique.component';

export const routes: Routes = [
    {path:'login', component: LoginComponent    },
    {path:'employee', component: EmployeeComponent,
        children :[
            {path:'presence', component: PresenceComponent},
            {path:'historique', component: HistoriqueComponent},
            {path:'', redirectTo:'presence', pathMatch:'full'},
        ]
    },
    {path:'pagenotfound', component: PageNotFoundComponent},
    {path:'', redirectTo:'/login', pathMatch:'full'},
];

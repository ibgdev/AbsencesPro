import { EmployeeComponent } from './employee/employee.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PresenceComponent } from './employee/presence/presence.component';
import { HistoriqueComponent } from './employee/historique/historique.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManAccountsComponent } from './admin/man-accounts/man-accounts.component';
import { ManPresencesComponent } from './admin/man-presences/man-presences.component';
import { ManAbsencesComponent } from './admin/man-absences/man-absences.component';
import { HistoryComponent } from './admin/history/history.component';
import { ManDepartmentsComponent } from './admin/man-departments/man-departments.component';

export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'employee', component: EmployeeComponent,
        children :[
            {path:'presence', component: PresenceComponent},
            {path:'historique', component: HistoriqueComponent},
            {path:'', redirectTo:'presence', pathMatch:'full'},
        ]
    },
    {path:'admin', component: AdminComponent,
        children :[
            {path:'dashboard', component: DashboardComponent},
            {path:'gestion-comptes', component: ManAccountsComponent},
            {path:'gestion-presences', component: ManPresencesComponent},
            {path:'gestion-absences', component: ManAbsencesComponent},
            {path:'gestion-departements', component: ManDepartmentsComponent},
            {path:'history', component: HistoryComponent},
            {path:'', redirectTo:'dashboard', pathMatch:'full'},
        ]
    },
    {path:'register', component:RegisterComponent},
    {path:'pagenotfound', component: PageNotFoundComponent},
    {path:'', redirectTo:'/login', pathMatch:'full'},
    {path:'**', redirectTo:'pagenotfound', pathMatch:'full'},
];

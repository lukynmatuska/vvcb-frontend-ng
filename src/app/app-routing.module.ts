import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReverseAuthGuard } from './auth/reverse-auth.guard';
import { RoleGuard } from './auth/role.guard';
import { AdminComponent } from './layouts/admin/admin.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { ResultTemplatesComponent } from './views/admin/result-templates/result-templates.component';
import { ResultsComponent } from './views/admin/results/results.component';
import { TeamsComponent } from './views/admin/teams/teams.component';
import { LandingComponent } from './views/landing/landing.component';
import { LoginComponent } from './views/login/login.component';
import { MonitorsComponent } from './views/monitors/monitors.component';
import { RaceComponent } from './views/race/race.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "dashboard", component: DashboardComponent,
        canActivate: [RoleGuard], data: { expectedRole: ["result-filler", "admin"] }
      },
      {
        path: "categories", component: DashboardComponent,
        canActivate: [RoleGuard], data: { expectedRole: ["admin"] }
      },
      {
        path: "rules", component: DashboardComponent,
        canActivate: [RoleGuard], data: { expectedRole: ["admin"] }
      },
      {
        path: "races", component: DashboardComponent,
        canActivate: [RoleGuard], data: { expectedRole: ["admin"] }
      },
      {
        path: "seasons", component: DashboardComponent,
        canActivate: [RoleGuard], data: { expectedRole: ["admin"] }
      },
      { path: "teams", component: TeamsComponent },
      { path: "results", component: ResultsComponent },
      { path: "result-templates", component: ResultTemplatesComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
    canActivate: [RoleGuard], data: { expectedRole: ["result-filler", "admin"] }
  },
  { path: "monitors", component: MonitorsComponent },
  { path: "monitors/:url", component: MonitorsComponent },
  { path: "race/:id", component: RaceComponent },
  { path: "login", component: LoginComponent, canActivate: [ReverseAuthGuard]},
  { path: "", component: LandingComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

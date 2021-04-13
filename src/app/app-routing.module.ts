import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionDashboardComponent } from './components/election-dashboard/election-dashboard.component';



const routes: Routes = [{ path: '', redirectTo: 'Elections', pathMatch: 'full' },
{ path: 'elections', component: ElectionDashboardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

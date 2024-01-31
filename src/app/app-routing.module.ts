import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, { path: 'episodes-list', loadChildren: () => import('./components/pages/episodes/episodes-list/episodes-list.module').then(m => m.EpisodesListModule) }, { path: 'episodes-details/:id', loadChildren: () => import('./components/pages/episodes/episodes-details/episodes-details.module').then(m => m.EpisodesDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


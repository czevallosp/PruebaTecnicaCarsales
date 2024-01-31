import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesDetailsComponent } from './episodes-details.component';

const routes: Routes = [{ path: '', component: EpisodesDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesDetailsRoutingModule { }

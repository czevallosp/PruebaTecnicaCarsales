import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesDetailsComponent } from './episodes-details/episodes-details.component';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { RouterModule } from '@angular/router';
import { EpisodesComponent } from './episodes.component';

const myComponents = [EpisodesDetailsComponent,
  EpisodesListComponent, EpisodesComponent];

@NgModule({
  declarations: [...myComponents],
  imports: [
    CommonModule
  ],
  exports:[...myComponents],
})
export class EpisodesModule { }

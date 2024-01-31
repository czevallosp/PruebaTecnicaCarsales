import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IEpisodes } from 'src/app/core/models/episodes.model';
import { IDetail } from 'src/app/core/models/detail.model';



@Component({
    selector:'app-episode',
    template:`
    <div class="card" >
      <div class="card-inner">
        <div class="header">
            <h2>{{ episode?.name | slice: 0:15}}</h2>
          <h4 class="text-muted">{{ episode?.episode}}</h4>
          <h4 class="text-muted">{{ episode?.url}}</h4>
          <small class="text-muted">{{ episode?.air_date | date }}</small>
        </div>
      </div>
    </div>`,
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class EpisodesComponent{
    @Input() episode:IEpisodes | undefined;
    @Input() detail: IDetail | undefined;
}
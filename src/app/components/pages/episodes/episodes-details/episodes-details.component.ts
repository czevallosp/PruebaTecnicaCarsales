import { DOCUMENT } from '@angular/common';
import {
  Component, HostListener, Inject, Input, OnInit,
} from '@angular/core';
import {
  ActivatedRoute, NavigationEnd, ParamMap, Router,
} from '@angular/router';
import {Location} from '@angular/common';

import { Observable } from 'rxjs';

import { DetailService } from 'src/app/data/services/detail/detail.service';
import { IDetail } from 'src/app/core/models/detail.model';
import { filter, take } from 'rxjs/operators';




@Component({
  selector: 'app-episodes-details',
  templateUrl: './episodes-details.component.html',
  styleUrl: './episodes-details.component.scss'
})

export class EpisodesDetailsComponent implements OnInit {
  @Input() public idepisode = 0;
  detail$: Observable<IDetail> | undefined;
  
  constructor(private route:ActivatedRoute, private detailSvc:DetailService, private location:Location) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      this.detail$ = this.detailSvc.getDetails(this.idepisode);
    });
  }

  onGoBack():void{
    this.location.back();
  }

}

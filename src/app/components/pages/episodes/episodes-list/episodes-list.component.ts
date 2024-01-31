import { DOCUMENT } from '@angular/common';
import {
  Component, HostListener, Inject, OnInit,
} from '@angular/core';
import {
  ActivatedRoute, NavigationEnd, ParamMap, Router,
} from '@angular/router';

import { filter, take } from 'rxjs/operators';

import { EpisodesService } from 'src/app/data/services/episodes/episodes.service';
import { IEpisodes } from 'src/app/core/models/episodes.model';
import {NgbModal, ModalDismissReasons}  from '@ng-bootstrap/ng-bootstrap'; 
import { EpisodesDetailsComponent } from '../episodes-details/episodes-details.component';

type RequestInfo = {
  next: string | null;
};
@Component({
  selector: 'app-episodes-list, ngbd-modal-basic',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss'],
})

export class EpisodesListComponent implements OnInit {
  episodes: IEpisodes[] = [];

  info: RequestInfo = {
    next: null,
  };

  showGoUpButton = false;

  private pageNum = 1;

  private hideScrollHeight = 200;

  private showScrollHeight = 500;

  constructor(
    @Inject(DOCUMENT) private document:Document,
    private episodesSvc: EpisodesService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.onUrlChanged();
  }

  ngOnInit(): void {
    this.getDataFromService();
  }

  @HostListener('window:scroll', [])
  onWindowScroll():void {
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

  onScrollDown():void{
    if (this.info.next) {
      this.pageNum++;
      this.getDataFromService();
    }
  }
  openPopup(id: number)
  {
    const modalRef = this.modalService.open(EpisodesDetailsComponent);
    modalRef.componentInstance.idepisode = id;
  }
  onScrollTop():void{
    this.document.body.scrollTop = 0; // Safari
    this.document.documentElement.scrollTop = 0; // Other
  }

  private onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.episodes = [];
        this.pageNum = 1;
        this.getDataFromService();
      });
  }
  
  private getDataFromService(): void {
    this.episodesSvc
      .getEpisodes(this.pageNum)
      .subscribe((res: any) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.episodes = [...this.episodes, ...results];
          this.info = info;
        } else {
          this.episodes = [];
        }
      },);
  }
}
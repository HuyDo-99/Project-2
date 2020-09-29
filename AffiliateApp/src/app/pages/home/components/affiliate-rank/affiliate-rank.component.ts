import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HomeService } from "../../service/home.service";

@Component({
  selector: 'app-affiliate-rank',
  templateUrl: './affiliate-rank.component.html',
  styleUrls: ['./affiliate-rank.component.scss']
})
export class AffiliateRankComponent implements OnInit {
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;
  constructor(
    private homeService: HomeService
  ) { }
   ranking: number;
   listRank: any;
  ngOnInit(): void {
    this.inputName = this.itemId + '_rating';
    this.getHistoryRaking();
    
  }
  getHistoryRaking(){
     this.homeService.getRankCustomer().subscribe(res => {
       this.listRank = res.reverse();
        this.ranking = this.listRank[0].RankingValue;
     });
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }
}

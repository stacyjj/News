import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/core/service/news-api.service';
import * as _moment from 'moment';

const moment = _moment;
const DATE_TIME_FORMAT = 'YYYY-MM-DD';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  articleSet = null;
  searchData = {
    searchKey: null,
    searchDate: moment(new Date()).format('YYYY-MM-DD')
  };
  constructor(private _service: NewsApiService) { }

  ngOnInit(): void {
    this.searchArticle(this.searchData);
  }

  searchArticle(searchData){
    this._service.getNewsArticles(searchData).subscribe(
      articleData => {
        this.articleSet = articleData;
      },error => {
  
      });
  }
  
}

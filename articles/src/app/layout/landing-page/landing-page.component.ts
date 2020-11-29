import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/core/service/news-api/news-api.service';
import {EventEmitterService} from 'src/app/core/service/common/event-emitter.service';
import * as _moment from 'moment';
import { Router } from '@angular/router'

const moment = _moment;
const DATE_TIME_FORMAT = 'YYYY-MM-DD';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  articleResult = null;
  articleSet = [];
  searchData = {
    searchKey: null,
    searchDate: moment(new Date()).format('YYYY-MM-DD')
  };
  pageLoading = true;
  infoLogo = 'assets/img/info.png';

  constructor(private _service: NewsApiService, private router : Router, private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
    this.searchArticle(this.searchData);
    if (this.eventEmitterService.subsVar == undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeGetArticaltion.subscribe(
        (articles) => {    
        this.searchArticle(articles);    
      });    
    }  
  }

  searchArticle(searchData){
    this.pageLoading = true;
    this.articleSet = [];
    this._service.getNewsArticles(searchData).subscribe(
      articleData => {
        this.articleResult = articleData;
        if(this.articleResult.articles.length != 0){
          this.articleResult.articles.forEach((article,index) => {
            if(article.content != null){
              const publishDate = moment(article.publishedAt);
              const dateFormatted = moment(publishDate).format('YYYY-MM-DD');
              article.publishedAt = dateFormatted;
              this.articleSet.push({article});
            }
            if(this.articleResult.articles.length-1 === index){
              this.pageLoading = false;
            }
          }
          )
        }else{
          this.pageLoading = false;
        }
    },error => {
        this.pageLoading = false;
        this.error();
      });
  }

  error() {
    this.router.navigate(["error"]);
  }

}

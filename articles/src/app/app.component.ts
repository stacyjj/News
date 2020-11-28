import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/core/service/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  articleSet = null;

  constructor(private _service: NewsApiService) {}

  ngOnInit(): void{
    this._service.getNewsArticles(null,null).subscribe(
      articleData => {
        this.articleSet = articleData;
      },error => {
  
      });
  }
}

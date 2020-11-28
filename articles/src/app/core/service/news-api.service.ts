import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private _http:HttpClient) { }

  getNewsArticles(searchKey,searchDate){
    return this._http.get(environment.newsURL  + searchKey + '&from=' + searchDate + '&sortBy=publishedAt' + '&apiKey=' + environment.apiKey,
    {observe:'body'
    });
  }
}

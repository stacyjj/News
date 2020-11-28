import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private _http:HttpClient) { }

  getNewsArticles(searchData){
    return this._http.get(environment.newsURL  + searchData.searchKey + '&from=' + searchData.searchDate + '&sortBy=publishedAt' + '&apiKey=' + environment.apiKey,
    {observe:'body'
    });
  }
}

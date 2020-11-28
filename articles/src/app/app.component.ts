import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/core/service/news-api/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor() {}

  ngOnInit(): void{
  
  }
}

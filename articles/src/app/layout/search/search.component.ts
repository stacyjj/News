import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {EventEmitterService} from 'src/app/core/service/common/event-emitter.service';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class SearchComponent implements OnInit {

  searchArticleForm : FormGroup;
  searchData = null;
  minDateSelection : Date;
  maxDateSelection : Date;

  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
    this.minDateSelection = moment().subtract(1, 'months').toDate();
    this.maxDateSelection = moment().toDate();
    this.searchArticleForm = new FormGroup({
      searchKey: new FormControl({value: '', disabled: false}),
      date: new FormControl({value: moment().format('YYYY-MM-DD'), disabled: false})
    });
  }

  articleSelection(){    
    this.searchData = {
      searchKey:this.searchArticleForm.get('searchKey').value?this.searchArticleForm.get('searchKey').value : null,
      searchDate:moment(this.searchArticleForm.get('date').value).format('YYYY-MM-DD')
    }
    this.eventEmitterService.getArticle(this.searchData);    
  } 

}

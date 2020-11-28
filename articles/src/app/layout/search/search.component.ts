import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import {EventEmitterService} from 'src/app/core/service/common/event-emitter.service';
import * as _moment from 'moment';
import { Moment} from 'moment';

const moment = _moment;

export const DATE_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE,MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS}
  ]
})
export class SearchComponent implements OnInit {

  searchArticleForm: FormGroup;
  searchData = null;

  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
    this.searchArticleForm = new FormGroup({
      searchKey: new FormControl({value: '', disabled: false}),
      date: new FormControl({value: moment(), disabled: false})
    });
  }

  yearSelected(normalizedYear: Moment) {
    const yearValue = this.searchArticleForm.get('date').value;
    yearValue.year(normalizedYear.year());
    this.searchArticleForm.controls.date.setValue(yearValue);
  }

  monthSelected(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const monthValue = this.searchArticleForm.get('date').value;
    monthValue.month(normalizedMonth.month());
    this.searchArticleForm.controls.date.setValue(monthValue);
    datepicker.close();
  }

  articleSelection(){    
    this.searchData = {
      searchKey:this.searchArticleForm.get('searchKey').value?this.searchArticleForm.get('searchKey').value : null,
      searchDate:moment(this.searchArticleForm.get('date').value).format('YYYY-MM-DD')
    }
    this.eventEmitterService.getArticle(this.searchData);    
  } 

}

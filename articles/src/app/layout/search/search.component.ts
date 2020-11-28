import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
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

  searchArtistForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.searchArtistForm = new FormGroup({
      searchKey: new FormControl({value: '', disabled: false}),
      date: new FormControl({value: moment(), disabled: false})
    });
  }

  yearSelected(normalizedYear: Moment) {
    const yearValue = this.searchArtistForm.get('date').value;
    yearValue.year(normalizedYear.year());
    this.searchArtistForm.controls.date.setValue(yearValue);
  }

  monthSelected(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const monthValue = this.searchArtistForm.get('date').value;
    monthValue.month(normalizedMonth.month());
    this.searchArtistForm.controls.date.setValue(monthValue);
    datepicker.close();
  }

  search(searchData){

  }

}

import { Component, EventEmitter, Output} from '@angular/core';
import {  } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  // IMPLEMENT ANY INPUT OR OUTPUT YOU MIGHT NEED

  searchCityName = '';
  isClicked = false;
  @Output() emitCitySearched: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  search(event: Event) {
    this.isClicked = true;
    if (this.searchCityName !== '') {
      this.emitCitySearched.emit(this.searchCityName);
    }

  }
}

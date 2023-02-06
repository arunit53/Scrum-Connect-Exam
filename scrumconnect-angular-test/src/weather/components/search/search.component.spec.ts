import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

import Spy = jasmine.Spy;
import { first } from 'rxjs/operators';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Search Component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit city name on button click', () => {
    component.searchCityName = 'London';
    spyOn(component.emitCitySearched, 'emit');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.btn-search');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.emitCitySearched.emit).toHaveBeenCalledWith('London');
  });

});

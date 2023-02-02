import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherContainerComponent } from './weather.container';
import { HttpClientModule } from '@angular/common/http';
import { WeatherSandbox } from '../sandbox/weather.sandbox.service';
import {RouterTestingModule} from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';

describe('WeatherContainerComponent', () => {
  let component: WeatherContainerComponent;
  let fixture: ComponentFixture<WeatherContainerComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherContainerComponent ],
      imports: [HttpClientModule, RouterTestingModule, StoreModule.forRoot({})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [WeatherSandbox, Store]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Weather container component', () => {
    expect(component).toBeTruthy();
  });

});

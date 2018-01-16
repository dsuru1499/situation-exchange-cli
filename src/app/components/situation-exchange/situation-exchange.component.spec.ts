import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationExchangeComponent } from './situation-exchange.component';

describe('SituationExchangeComponent', () => {
  let component: SituationExchangeComponent;
  let fixture: ComponentFixture<SituationExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituationExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

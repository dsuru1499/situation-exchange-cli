import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationExchangeFormComponent } from './situation-exchange-form.component';

describe('SituationExchangeFormComponent', () => {
  let component: SituationExchangeFormComponent;
  let fixture: ComponentFixture<SituationExchangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituationExchangeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationExchangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

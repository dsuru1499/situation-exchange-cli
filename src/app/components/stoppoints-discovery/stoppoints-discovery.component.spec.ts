import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoppointsDiscoveryComponent } from './stoppoints-discovery.component';

describe('StoppointsDiscoveryComponent', () => {
  let component: StoppointsDiscoveryComponent;
  let fixture: ComponentFixture<StoppointsDiscoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoppointsDiscoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoppointsDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

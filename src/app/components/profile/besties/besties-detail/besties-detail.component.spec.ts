import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestiesDetailComponent } from './besties-detail.component';

describe('BestiesDetailComponent', () => {
  let component: BestiesDetailComponent;
  let fixture: ComponentFixture<BestiesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestiesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

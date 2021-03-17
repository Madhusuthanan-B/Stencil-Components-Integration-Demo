import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedPlaygroundComponent } from './combined-playground.component';

describe('CombinedPlaygroundComponent', () => {
  let component: CombinedPlaygroundComponent;
  let fixture: ComponentFixture<CombinedPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinedPlaygroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

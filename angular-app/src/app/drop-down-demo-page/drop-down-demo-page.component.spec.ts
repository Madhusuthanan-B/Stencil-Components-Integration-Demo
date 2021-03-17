import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownDemoPageComponent } from './drop-down-demo-page.component';

describe('DropDownDemoPageComponent', () => {
  let component: DropDownDemoPageComponent;
  let fixture: ComponentFixture<DropDownDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownDemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

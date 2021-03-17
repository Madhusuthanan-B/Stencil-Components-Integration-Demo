import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupDemoPageComponent } from './list-group-demo-page.component';

describe('ListGroupDemoPageComponent', () => {
  let component: ListGroupDemoPageComponent;
  let fixture: ComponentFixture<ListGroupDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGroupDemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

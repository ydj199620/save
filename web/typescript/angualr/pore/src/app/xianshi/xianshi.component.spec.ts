import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XianshiComponent } from './xianshi.component';

describe('XianshiComponent', () => {
  let component: XianshiComponent;
  let fixture: ComponentFixture<XianshiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XianshiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XianshiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

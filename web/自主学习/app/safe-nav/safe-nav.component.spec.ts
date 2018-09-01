import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeNavComponent } from './safe-nav.component';

describe('SafeNavComponent', () => {
  let component: SafeNavComponent;
  let fixture: ComponentFixture<SafeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

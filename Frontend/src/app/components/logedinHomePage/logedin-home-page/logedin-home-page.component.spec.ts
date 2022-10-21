import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogedinHomePageComponent } from './logedin-home-page.component';

describe('LogedinHomePageComponent', () => {
  let component: LogedinHomePageComponent;
  let fixture: ComponentFixture<LogedinHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogedinHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogedinHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

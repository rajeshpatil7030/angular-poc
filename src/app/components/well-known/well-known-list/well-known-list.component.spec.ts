import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellKnownListComponent } from './well-known-list.component';

describe('WellKnownListComponent', () => {
  let component: WellKnownListComponent;
  let fixture: ComponentFixture<WellKnownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellKnownListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellKnownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

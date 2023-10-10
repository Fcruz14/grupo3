import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarLugarComponent } from './reservar-lugar.component';

describe('ReservarLugarComponent', () => {
  let component: ReservarLugarComponent;
  let fixture: ComponentFixture<ReservarLugarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservarLugarComponent]
    });
    fixture = TestBed.createComponent(ReservarLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

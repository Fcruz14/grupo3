import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexReservaComponent } from './index-reserva.component';

describe('IndexReservaComponent', () => {
  let component: IndexReservaComponent;
  let fixture: ComponentFixture<IndexReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexReservaComponent]
    });
    fixture = TestBed.createComponent(IndexReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

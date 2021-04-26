import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuroGeneralComponent } from './muro-general.component';

describe('MuroGeneralComponent', () => {
  let component: MuroGeneralComponent;
  let fixture: ComponentFixture<MuroGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuroGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuroGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

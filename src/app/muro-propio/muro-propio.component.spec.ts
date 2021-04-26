import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuroPropioComponent } from './muro-propio.component';

describe('MuroPropioComponent', () => {
  let component: MuroPropioComponent;
  let fixture: ComponentFixture<MuroPropioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuroPropioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuroPropioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

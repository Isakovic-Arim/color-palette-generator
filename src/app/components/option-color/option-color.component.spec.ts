import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionColorComponent } from './option-color.component';

describe('OptionColorComponent', () => {
  let component: OptionColorComponent;
  let fixture: ComponentFixture<OptionColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

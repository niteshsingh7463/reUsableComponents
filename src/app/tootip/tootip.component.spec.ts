import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TootipComponent } from './tootip.component';

describe('TootipComponent', () => {
  let component: TootipComponent;
  let fixture: ComponentFixture<TootipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TootipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TootipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

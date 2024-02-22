import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnaCardComponent } from './dna-card.component';

describe('DnaCardComponent', () => {
  let component: DnaCardComponent;
  let fixture: ComponentFixture<DnaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DnaCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DnaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

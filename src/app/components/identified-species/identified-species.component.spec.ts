import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifiedSpeciesComponent } from './identified-species.component';

describe('IdentifiedSpeciesComponent', () => {
  let component: IdentifiedSpeciesComponent;
  let fixture: ComponentFixture<IdentifiedSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifiedSpeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifiedSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgDestSelectorComponent } from './org-dest-selector.component';

describe('OrgDestSelectorComponent', () => {
  let component: OrgDestSelectorComponent;
  let fixture: ComponentFixture<OrgDestSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OrgDestSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgDestSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

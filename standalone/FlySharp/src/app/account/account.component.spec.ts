import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApplicationStateService } from '../application-state/application-state.service';

import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  const applicationService = jasmine.createSpyObj('ApplicationStateService', {
    'getAccount' : of('')});
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AccountComponent ],
      providers: [{provide: ApplicationStateService, useValue: applicationService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

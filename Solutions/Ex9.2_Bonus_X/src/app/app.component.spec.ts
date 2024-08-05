import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { ApplicationStateService } from './application-state/application-state.service';
import { FLIGHTS, MYFLIGHTS } from './model/mock-flights';

describe('AppComponent', () => {

  const spyApplicationStateService = jasmine.createSpyObj<ApplicationStateService>('MockApplicationStateService', [],
    {
        flights: FLIGHTS,
        myFlights: MYFLIGHTS,
        displayCurrency: { code: 'GBP', symbol: '£', rate: 1.0 }
    });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers:[provideRouter([])]
    }).overrideComponent(AppComponent,
      { set: { providers: [{ provide: ApplicationStateService, useValue: spyApplicationStateService }] } })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Fly Sharp' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Fly Sharp');
  });

  it('should have a <router-outlet>', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeDefined();
  });
});

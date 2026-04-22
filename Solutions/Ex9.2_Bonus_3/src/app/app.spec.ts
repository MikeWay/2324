import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from '@angular/router';
import { ApplicationState } from './application-state/application-state';
import { FLIGHTS, MYFLIGHTS } from './model/mock-flights';

describe('App', () => {

  const mockApplicationState = {
    flights: FLIGHTS,
    myFlights: MYFLIGHTS,
    displayCurrency: { code: 'GBP', symbol: '£', rate: 1.0 },
    error: ''
  } as unknown as ApplicationState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])]
    }).overrideComponent(App,
      { set: { providers: [{ provide: ApplicationState, useValue: mockApplicationState }] } })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Fly Sharp' title`, () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.title()).toEqual('Fly Sharp');
  });

  it('should have a <router-outlet>', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeDefined();
  });
});

# Exercise Check: Constructor Injection & Old Naming Conventions

Checked against: https://adaptalearn.learningtree.com/Output/2324f1dev/index.html

**Criteria:**
- **A** — Constructor injection: `constructor(private x: SomeType)`
- **B** — Old naming: `xxxComponent` / `xxxService` class names, or `.component.ts` / `.service.ts` / `.component.html` file extensions

---

## Practice 2.2: Multiple Components
**B** — Step 4: references `app.component.html`  
**B** — Step 6: instructs adding `ForecastComponent` to `imports`; references `ForecastComponent` class  
**B** — Step 7: import path shown as `'./forecast/forecast.component'` (`.component` file extension)  
**B** — Step 10: references `ForecastComponent` output

---

## Ex 2.1: Creating an Angular Component
**B** — Step 7 (hint): shows `export class HomeComponent {` — old `Component` suffix  
**B** — Step 12 (hint): shows `HomeComponent` in `declarations` array with `@NgModule` pattern; references `AppComponent`

---

## Ex 3.1: Injecting a Service
**A** — Step 16: `constructor(private stateService: ApplicationState){}`

---

## Ex 4.2: Event Handling
**B** — Step 13: instructs editing `buy-flight.component.ts` (`.component.ts` extension)  
**B** — Step 16: instructs editing `buy-flight.component.ts` (`.component.ts` extension)  
**B** — Step 17: references `BuyFlightsComponent` class name

---

## Ex 5.3: Creating a Custom Pipe
**A** — Step 16: `constructor(public state: ApplicationStateService){}`  
**B** — Step 16: references `CurrencySelectorComponent` and `AppComponent`

---

## Ex 6.1: Unit Testing
**B** — Step 37: instructs adding a test to `buy-flight.component.spec.ts` (`.component.spec.ts` extension); note earlier steps use `buy-flight.spec.ts` — inconsistency in the exercise

---

## Practice 7.1: Form Bindings
**B** — Step 2: references `preferences-form\preferences-form.component.html` (`.component.html`)

---

## Practice 7.2: CSS Validation Feedback
**B** — Step 7: references `preferences-form.component.scss` (`.component.scss`)

---

## Ex 7.1: Implementing a Template-Driven Form
**B** — Step 18: instructs editing `payment.component.ts` (`.component.ts` extension)

---

## Ex 8.1: Communicating With a REST Server
**A** — Step 9: `private http: HttpClient` added to `FlightsService` constructor  
**A** — Step 19: `private flightsService: FlightsService` added to `ApplicationStateService` constructor  
**B** — Step 7: references `flights.service.spec.ts` (`.service.spec.ts` extension)  
**B** — Steps 9, 19, 34–43: multiple references to `FlightsService` class (xxxService suffix)  
**B** — Step 42: references `application-state.service.ts` (`.service.ts` extension)

---

## Ex 8.2: Communicating With a Socket Server
**A** — Step 9: instructs replacing constructor injection with `inject()` — implies original used `constructor(private flightStatusService: FlightStatusService)`

---

## Ex 9.1: Creating an Attribute Directive
**A** — Step 5: `constructor(private el: ElementRef)` — constructor injection of `ElementRef`  
**B** — Step 9: instructs editing `app.component.ts` (`.component.ts` extension)  
**B** — Step 10: instructs editing `app.component.html` (`.component.html` extension)

---

## Ex 9.2: Migrating to Angular Material
**B** — Step 6: instructs editing `app.component.ts`  
**B** — Steps 9, 11, 14, 15, 16, 18: instructs editing `app.component.html`  
**B** — Steps 19–20: instructs creating/editing `home.component.ts`, `home.component.html`, `home.component.scss`  
**B** — Steps 21, 24: references `OrgDestSelectorComponent` class name

---

## Summary Table

| Exercise | Constructor Injection (A) | Old Naming (B) |
|---|---|---|
| Practice 2.2 | — | Steps 4, 6, 7, 10 |
| Ex 2.1 | — | Steps 7, 12 (hints) |
| Ex 3.1 | Step 16 | — |
| Ex 4.2 | — | Steps 13, 16, 17 |
| Ex 5.3 | Step 16 | Step 16 |
| Ex 6.1 | — | Step 37 |
| Practice 7.1 | — | Step 2 |
| Practice 7.2 | — | Step 7 |
| Ex 7.1 | — | Step 18 |
| Ex 8.1 | Steps 9, 19 | Steps 7, 9, 19, 34–43, 42 |
| Ex 8.2 | Step 9 (implied) | — |
| Ex 9.1 | Step 5 | Steps 9, 10 |
| Ex 9.2 | — | Steps 6, 9–18, 19–20, 21, 24 |


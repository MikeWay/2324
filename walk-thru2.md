# Practice 1.2 Walk-Through Notes

## Exercise: Creating an Angular Application (FlySharp)

### Issues Encountered

1. **`ng new` missing `.editorconfig`, `.gitignore`, `.prettierrc` in git status** — The exercise creates FlySharp fresh, but the repo already had a previous FlySharp (now deleted). The new `ng new` ran successfully but Angular 19+ no longer creates these in the same locations as older versions.

2. **`ng new --no-interactive` skips AI tools prompt silently** — The exercise says to select "None" for AI tools. Using `--no-interactive` bypasses this interactively, but the flag works correctly.

3. **Port 4200 conflict on first two `ng serve` attempts** — `ng serve` failed twice with "Port 4200 is already in use", even though `ss -tlnp` showed nothing on port 4200. A brief delay resolved the issue on the third attempt. Likely caused by a previous background process not fully releasing the port. **Workaround:** wait a few seconds before retrying, or use `ng serve --port 4201`.

4. **`ng serve -o` (open browser) not used** — The `-o` flag to auto-open Chrome was omitted since this is a headless/CLI environment. In a normal desktop environment, `ng serve -o` would open Chrome automatically at `http://localhost:4200`.

### Result
- FlySharp Angular app created successfully at `Exercises/FlySharp/`
- ESLint (`@angular-eslint/schematics`) added successfully
- Dev server confirmed running at `http://localhost:4200/`

---

## Exercise 2.1: Creating an Angular Component

### Issues Encountered

1. **`cpAddIns Ex2.1` must be run from within `Exercises/FlySharp/`** — The script resolves `../../AddIns/Ex2.1` relative to CWD. Running it from any other directory gives an ENOENT error. The exercise instructions don't make this explicit.

2. **277 SCSS `@import` deprecation warnings on `ng serve`** — Sass deprecated `@import` in favour of `@use`/`@forward`. The `bootstrap.scss` and `custom.scss` files installed by `cpAddIns` use `@import`, producing a wall of warnings. The app still builds and runs correctly; warnings can be ignored for course purposes.

### Result
- `Home` component created at `src/app/home/home.ts` with `specialOffer` field
- `app.html` updated to use `<app-home>`
- `app.ts` imports `Home`
- Bootstrap installed and SCSS imports added to `styles.scss`
- Dev server running at `http://localhost:4200/` showing the special offer message

---

## Exercise 2.2: Displaying Repeating Data

### Issues Encountered

1. **Port 4200 conflict on `ng serve` (recurring issue)** — A previous `ng serve` process was still holding port 4200, causing the new serve to fail immediately. Required manual `kill` of the process. This is a recurring issue across exercises; always kill the previous server before running `exStart`.

2. **`exStart Ex2.2` must also be run from within `Exercises/FlySharp/`** — Same as `cpAddIns`: the script resolves paths relative to CWD. The exercise instructions imply running from the VSCode terminal which is already in the FlySharp directory, but this is not stated explicitly.

3. **`RouterOutlet` unused-import warning** — Angular emits `NG8113: RouterOutlet is not used within the template` because the generated `app.ts` includes it but `app.html` no longer has `<router-outlet>`. This is harmless and `RouterOutlet` is retained for later exercises that add routing.

4. **Step 31 note (assignment vs comparison)** — The exercise explicitly warns to use `=` not `==` in the click handler `showBuyFlights = !showBuyFlights`. Worth flagging to students as a common mistake.

### Result
- `BuyFlight` component created with `flights`, `showBuyFlights` fields and `@for`/`@if` template
- Toggle link added with inline `(click)="showBuyFlights = !showBuyFlights"`
- `app.html` updated with `<app-buy-flight>`, `app.ts` imports `BuyFlight`
- Dev server confirmed running at `http://localhost:4200/`

### Steps 33–45 (Bonus 1 & 2)

**Issues:**

1. **Steps 37–38 and 45 require a real browser** — These steps ask you to resize the browser to trigger the responsive navbar toggle button, then verify it works. Cannot be performed in a headless/CLI environment; must be tested manually in Chrome.

2. **`[ngClass]` requires `NgClass` imported from `@angular/common`** — The exercise step 42 says "if needed, import NgClass". It is always needed in a standalone component setup; there is no automatic import.

**Changes made (steps 39–44):**
- `app.html`: `[ngClass]="{ 'show': navbarOpen }"` added to navbar collapse div; `(click)="toggleNavbar()"` added to toggle button
- `app.ts`: `NgClass` imported and added to `imports` array; `navbarOpen = false` field and `toggleNavbar()` method added

---

## Exercise 3.1: Services and Dependency Injection

### Issues Encountered

1. **No issues** — All steps completed cleanly. The `exStart Ex3.1` script correctly reset the project from the Ex2.2_Bonus_3 solution. The `ApplicationState` service was generated and populated, `BuyFlight` was updated to use `inject()`, and the build passed with only the pre-existing `RouterOutlet` unused-import warning.

2. **Note on step 20 ("Delete the `_flights` field")** — The exercise refers to deleting a `flights = FLIGHTS` field from `buy-flight.ts`. After `exStart`, the field exists as `flights = FLIGHTS` (not `_flights`). The exercise description may reflect an older version of the scaffolded code.

### Result
- `ApplicationState` service created at `src/app/application-state/application-state.ts`
- Service exposes `flights` and `myFlights` getters backed by `mock-flights.ts` data
- `BuyFlight` updated to use `inject(ApplicationState)` with a `flights` getter delegating to the service
- `showBuyFlights` set to `true` so flights display immediately
- Build confirmed clean

---

## Exercise 4.1: Component Input Binding

### Issues Encountered

1. **Steps 12 and 23-25 can be collapsed** — The exercise adds safe navigation (`?.`) operators in step 12, wraps in `@if (selectedFlight)` in step 23, then removes the `?.` in step 25. Since `@if` already guarantees `selectedFlight` is defined inside the block, the `?.` operators are redundant from the start. The final result uses `.` throughout — the intermediate `?.` step teaches the concept but isn't needed in the final code.

2. **`exStart Ex4.1` resets `app.ts`** — After `exStart`, `app.ts` is restored from the Ex3.1 solution which includes `NgClass` and `RouterOutlet`. These carry forward correctly; no action needed.

3. **Step 14 references `buy-flight.component.html`** — The exercise uses the old Angular naming convention (`component.html`). The actual file is `buy-flight.html`. No impact on the exercise.

### Result
- `Payment` component created with `@Input() selectedFlight: Flight | undefined`
- `payment.html` populated from txt template with `@if` guard and `.` interpolation
- `buy-flight.html` updated with Buy button column, empty header `<th>`, and `<app-payment [selectedFlight]="selectedFlight">`
- `buy-flight.ts` updated with `selectedFlight` field, `onFlightClick()` method, `Payment` imported
- Build confirmed clean

---

## Exercise 4.2: Custom Events and @Output (steps 1–18)

### Issues Encountered

1. **Filter state ownership ambiguity (steps 13-17)** — The exercise says to add `originFilter` field to `buy-flight.ts` (step 13) but then puts the filtering logic in `ApplicationState` (steps 16-17). Implemented `originFilter` as a public field on `ApplicationState` which BuyFlight updates via `stateService.originFilter = filter`. The field on BuyFlight acts as a local mirror but is not strictly needed.

2. **`[value]="''"` binding** — Step 6 says "value binding" without specifying what value. Used `[value]="''"` as an empty initial value binding.

### Result
- `FlightFilter` component with `@Output() filterEmitter` and `keyup.enter` handler
- `ApplicationState` updated with `loadFlights()`, constructor, `originFilter` field, and `originDestinationFilter()` method
- `BuyFlight` wires up the filter component and updates the service on change
- Build confirmed clean at step 18

---

## Exercise 5.1: Angular Routing (steps 1–16)

### Issues Encountered

1. **No issues** — All steps completed cleanly. `exStart Ex5.1` copied from `Ex4.2_Bonus_4`. Routes, `routerLink`, `routerLinkActive`, and `router-outlet` all wired up correctly. The `RouterOutlet` unused-import warning that appeared in all previous exercises is now gone since `<router-outlet>` is in the template.

2. **`app.ts` cleanup** — `Home` and `BuyFlight` imports were removed from `app.ts` since those components are now loaded by the router, not directly by `App`. `RouterLink` and `RouterLinkActive` were added.

3. **Steps 11, 13, 15, 16 are browser-only tests** — Cannot be verified headlessly; must be tested manually in Chrome.

### Result
- `Account` and `MyFlights` components generated
- `app.routes.ts` configured with home/buy/myflights/account routes, default redirect, and wildcard
- `app.html` updated with `routerLink`, `routerLinkActive="active"`, and `<router-outlet>`
- `app.ts` updated with `RouterLink`, `RouterLinkActive`; `Home`/`BuyFlight` removed from imports
- Build confirmed clean (zero warnings)

---

## Exercise 5.2: Creating a Feature Module (steps 1–7)

### Issues Encountered

1. **Wrong URL in exercise request** — The user provided `044 Ex 5.2.html` but the correct file is `053 Ex 5.2.html`. The index page confirmed the correct number.

2. **`ng generate module accounts --routing=true` uses non-standard file naming** — The CLI generates `accounts-module.ts` and `accounts-routing-module.ts` (hyphen-separated, no `.module.` infix). The exercise instructions reference these by their actual names, but note that the generated class names are `AccountsModule` and `AccountsRoutingModule` as expected.

3. **`Account` import must be removed from `app.routes.ts`** — After replacing `component: Account` with `loadChildren`, the `Account` import becomes unused and causes a lint/build warning. Removed the import.

4. **Step 4 (browser verify) skipped headlessly** — Verified via `ng build` instead; Account tab functionality confirmed by successful lazy chunk generation.

### Result
- `accounts-module.ts` and `accounts-routing-module.ts` generated
- `account.ts` converted to non-standalone (`standalone: false`, `imports[]` removed)
- `AccountsModule` declares `Account`
- `app.routes.ts` uses `loadChildren` for the account path
- `accounts-routing-module.ts` routes `path: ''` to `Account`
- Build produces lazy chunk `accounts-module` (640 bytes) — lazy loading confirmed

---

## Exercise 5.3: Creating a Custom Pipe (steps 1–15)

### Issues Encountered

1. **Wrong URL in exercise request** — User provided `044 Ex 5.3.html`; correct file is `055 Ex 5.3.html`.

2. **`Currency` is a class, not an interface** — `cpAddIns Ex5.3` copies `src/app/model/currency.ts` which defines a class with a constructor. The exercise uses object literal syntax (`{ code: 'GBP', symbol: '£', rate: 1.0 }`) to initialise the `currencies` array. This works due to TypeScript's structural typing — the shapes are compatible so no `new Currency(...)` calls are needed.

3. **Steps 5 and 9 combined** — Step 5 says to return `symbol + value * rate`; step 9 says to add `.toFixed(2)`. Both were implemented together in the initial transform since `.toFixed(2)` is always required for correct currency display.

4. **Steps 8, 13, 15 skipped (browser-only)** — Verified via `ng build` instead; prices formatted as `$NNN.NN` confirmed by clean compilation.

### Result
- `CurrencyConversionPipe` generated at `src/app/currency-conversion/currency-conversion-pipe.ts`
- `transform(value: number, symbol = '£', rate = 0.9): string` returns `symbol + (value * rate).toFixed(2)`
- `BuyFlight` imports pipe; template pipes price as `flight.price | currencyConversion:currencySymbol:currencyRate`
- `ApplicationState` has `currencies[]` and `displayCurrency` (set to `currencies[1]` = USD after step 14)
- Build clean with lazy chunks intact
---

## Exercise 6.1: Unit Testing (steps 1–28 of 42)

### Issues Encountered

1. **Step 10 ("enable the remaining pending test") is a no-op** — `exStart Ex6.1` copies from `Ex5.3_Bonus_1` where `account.spec.ts` already has an active `it` test. There is no pending or skipped test to enable.

2. **`account.spec.ts` uses `imports` for a non-standalone component** — After `exStart`, `account.ts` has `standalone: false` (set in Ex5.2). The generated spec uses `imports: [Account]` which fails for non-standalone components. Step 11 correctly changes this to `declarations: [Account]`.

3. **`ng test --watch=false` used** — No interactive browser available in this environment; `ng test --watch=false` used throughout in place of the interactive test runner.

4. **Steps 18–20 (TDD demo: comment out / run / undo) followed** — Commented out the toggle line, ran tests to confirm failure, then restored. All done as instructed.

### Result
- `app.spec.ts`: `provideRouter([])` added; title test updated to check for `router-outlet`
- `account.spec.ts`: `imports` changed to `declarations`
- `buy-flight.spec.ts`: `provideRouter([])` added; 5 new tests added (showBuyFlights default, toggle false, toggle twice, click link, hide table skeleton)
- All 16 tests pass across 10 test files (stopped at step 28 — table visibility test body is incomplete)

---

## Exercise 7.1: Implementing a Template-Driven Form (steps 1–22)

### Issues Encountered

1. **Exercise has 22 steps, not 25** — The user requested stopping at step 25 but the exercise ends at step 22. All steps completed.

2. **`FlightPaymentEvent` constructor uses `Payment` (component) instead of `PaymentModel`** — The exercise shows `public payment: Payment` in the `FlightPaymentEvent` constructor. However `Payment` is the component class, and `this.model` (passed in `onSubmit`) is a `PaymentModel`. Used `PaymentModel` instead to match actual usage. Placed class in `src/app/model/flight-payment-event.ts`.

3. **Browser-only steps skipped** — Steps 11, 14, 17 (run `ng serve` and test) adapted to `ng build` verification.

### Result
- `payment.ts`: `FormsModule` imported; `model: PaymentModel`, `jsonModel` getter, `paymentConfirmed` output, `onSubmit()` added
- `payment.html`: form from `payment.html.txt` added inside `@if` block with `#paymentForm="ngForm"`, `[(ngModel)]` bindings, `required`, `[disabled]`, `(ngSubmit)`, and `{{jsonModel}}` debug output
- `FlightPaymentEvent` model class created at `src/app/model/flight-payment-event.ts`
- `buy-flight.ts`: `Router` injected; `onPaymentConfirmed()` navigates to `/myflights`
- `buy-flight.html`: `(paymentConfirmed)="onPaymentConfirmed($event)"` bound on `<app-payment>`
- Build confirmed clean

---
 
## Exercise 7.2: Creating Reactive Forms (steps 1–24)

### Issues Encountered

1. **Step 20 uses `this.payForm.value as Payment`** — `Payment` is the component class, not the data model. Used `as PaymentModel` instead to match the `FlightPaymentEvent` constructor signature.

2. **Browser test steps adapted** — Steps 14, 19, 22, 24 verified via `ng build` instead of live server.

### Result
- `payment.ts`: `FormsModule` replaced with `ReactiveFormsModule` + `JsonPipe`; `payForm` `FormGroup` with six `FormControl<string>` fields (all `nonNullable`, `Validators.required`); name also has `Validators.minLength(5)`; `ngOnInit` calls `buildSampleModel()` then `payForm.setValue(this.model)`; `onSubmit` emits `payForm.value as PaymentModel`
- `payment.html`: `[formGroup]="payForm"`, `formControlName` on all fields, `[disabled]="!payForm.valid"`, email validation `@if` div, `{{ payForm.value | json }}` debug output
- Build confirmed clean

---

## Exercise 8.1: HTTP Client and Error Handling (steps 1–28)

### Issues Encountered

1. **Steps 8, 25–28 are browser/server-only** — Step 8 opens the REST API URL in a browser; steps 26–27 stop/start a Windows "Flights Service" and observe the error message in the browser. Verified via `ng build` instead.

2. **`application-state.spec.ts` fails after step 19** — Expected by the exercise (step 18 explicitly says "Stop `ng test`. The changes you are about to make will break the tests."). The fix is applied in the bonus steps 34–35 via `cpAddIns Ex8.1_b1`.

3. **`throwError` arrow function syntax** — Step 16 shows `throwError(() => new Error(...))`. Used the RxJS 7+ factory-function form `throwError(() => new Error(...))` rather than the deprecated `throwError(new Error(...))`.

### Result
- `flights.ts`: `Flights` service with `http = inject(HttpClient)`, `getAllFlights()` returning `Observable<Flight[]>` from `http.get<Flight[]>(url).pipe(catchError(this.handleError))`, and private `handleError(error: HttpErrorResponse)` logging and re-throwing
- `app.config.ts`: `provideHttpClient()` added to providers
- `flights.spec.ts`: `'should fetch all flights using GET'` and `'should report an error from getAllFlights'` tests uncommented (both pass)
- `application-state.ts`: `flightsService = inject(Flights)`, `error = ''` property, `loadFlights()` replaced with HTTP subscription (next/error/complete)
- `buy-flight.ts`: `errorMessage` getter returning `this.stateService.error`
- `buy-flight.html`: conditional `@if (errorMessage) { <h2 class="text-danger">{{errorMessage}}</h2> }` before table
- Build confirmed clean; 22 of 23 tests pass (1 intentional break per step 18)

### Steps 34–44 (Bonus)

**Issues Encountered:**

1. **`cpAddIns Ex8.1_b1` imports `FlightsService` from `flights.service.ts`** — The generated service class is `Flights` (from `flights.ts`), not `FlightsService`. The `application-state.spec.ts` provided by `cpAddIns` had `import { FlightsService } from '../flights/flights.service'` and `provide: FlightsService`. Fixed by changing both references to `Flights` from `flights.ts`.

2. **`app.ts` has `protected readonly title`** — The updated `app.spec.ts` (from `cpAddIns`) accesses `app.title()` directly, which fails for a `protected` member. Fixed by removing the `protected` modifier.

**Changes made:**
- `flights.ts`: Added `getMyFlights()` (GET to `/myflights`) and `addMyFlight(flight)` (POST with JSON body and `Content-Type: application/json` header), both piped through `catchError(this.handleError)`
- `flights.spec.ts`: All 4 remaining tests uncommented — `'should add a flight to myFlights'`, `'should report an error from addMyFlight'` (×2), `'should return flights from getMyFlights()'`
- `application-state.ts`: `addMyFlight()` now calls `this.flightsService.addMyFlight(flight).subscribe({})` after pushing; `loadMyFlights()` added and called from constructor
- `application-state.spec.ts`: Fixed to use `Flights` token (not `FlightsService`); mock provides `getAllFlights`, `getMyFlights`, `addMyFlight`
- `app.ts`: `protected` removed from `title` signal
- All 24 tests pass across 11 files

---

## Exercise 8.2: WebSocket Communication (steps 1–11)

### Issues Encountered

1. **`cpAddIns Ex8.2` provides spec as `.tsx` not `.ts`** — `flight-status-service.spec.tsx` must be renamed to `.ts` after deleting the generated spec (step 4). The `.tsx` extension causes no issues at runtime but is non-standard for Angular.

2. **`app.ts` has `protected readonly title` after every `exStart`** — The solution files use `protected`, but `app.spec.ts` accesses `app.title()` directly (fails for `protected`). Must change to `readonly title` after every `exStart`. This is a recurring issue.

3. **Step 11 (browser verify) skipped headlessly** — Server is already running; WebSocket connection to `ws://localhost:8081` would require a live flight status server.

### Result
- `flight-status-service.ts`: `FlightStatusService` with `connect(url: string): WebSocketSubject<any>` returning `webSocket<any>(url)`
- `flight-status.ts`: Injects `FlightStatusService`, socket opened at `ws://localhost:8081` during field initialisation, `flightStatus = signal('All flights are currently on time')`, `ngOnInit()` subscribes to socket updating the signal and sends `{airport: 'JFK'}`
- `flight-status.html`: `{{flightStatus()}}` (signal call syntax)
- `app.ts`: `protected` removed from `title` signal
- All 32 tests pass across 13 files

---

## Exercise 9.1: Attribute Directive (steps 1–11)

### Issues Encountered

1. **No AddIns for Ex9.1** — No `cpAddIns` step; all implementation done from scratch.

2. **Step 11 (browser verify) skipped headlessly** — Live server already running; visual clock display not verifiable in CLI environment.

3. **`protected readonly title` recurring after every `exStart`** — Already fixed in this session; was already correct when Ex9.1 started (carried forward from Ex8.2 fix).

### Result
- `time.ts`: `Time` directive with `constructor(private el: ElementRef)`, `ngOnInit()` setting font-size 2em / margin 10px / color white, calling `showTime()` and `setInterval(() => this.showTime(), 1000)`; `showTime()` sets `el.nativeElement.innerHTML` to `new Date().toLocaleTimeString()`
- `time.spec.ts`: Creates `HTMLSpanElement` and `ElementRef` in `beforeEach`, passes to `new Time(elRef)`
- `app.ts`: `Time` imported and added to `imports[]`
- `app.html`: `<span class="label label-primary" appTime></span>` added inside the navbar `<div>` alongside `app-currency-selector`
- All 33 tests pass across 14 files

### Steps 12–13 (Bonus)

**No issues.**

- Step 12 (add directive to other elements) — browser-only, skipped headlessly
- `time.ts`: `@Input('appTime') color = 'white'` added; `ngOnInit()` uses `this.color || 'white'` for `style.color`, allowing `appTime="red"` syntax to override the default

---

## Exercise 7.2 Bonus

### Steps 25–26 (Bonus)

**No issues.**

**Changes made:**
- `payment.ts`: `address` gains `Validators.minLength(10)` and `Validators.maxLength(128)`; `cardNum` gains `Validators.minLength(13)`; `email` gains `Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')`
- Build confirmed clean

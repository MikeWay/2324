# Course Walk-Through Notes

## Environment

- **Angular CLI**: 21.2.7 (global, at `/usr/local/bin/ng` → symlinked to `/home/mjrw/n/bin/ng`)
- **Node.js**: v24.0.0
- **OS**: Linux (Ubuntu)
- TYPESCRIPT version
- Make sure that the code from the end of ex5.2 (npx serve actually works)

MUST UPDATE the Node Scripts on the server

No version of Cypress is installed in: /home/mjrw/.cache/Cypress/15.14.0/Cypress

Please reinstall Cypress by running: cypress install

npx cypress install
---

## Practice 1.2: Creating an Angular Application

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/012%20Practice1.2.html

### Issues / Differences

1. **`ng new` interactive prompts differ from exercise**
   - Exercise (Steps 6-9) expects four interactive prompts:
     - Step 6: Share data with Google? → N
     - Step 7: Stylesheet format? → Sass (SCSS)
     - Step 8: Server-Side Rendering / SSG? → N
     - Step 9: AI tool? → None
   - With CLI v21, the analytics question does not appear (telemetry is handled differently).
   - The **AI tool selection** prompt (Step 9) is **new in Angular 21** — not mentioned in the exercise, and not present in older CLI versions.
   - Workaround: Pass `--style=scss --ssr=false` flags to skip prompts 7 and 8. The AI tool prompt still appears interactively and must be answered manually (select `None`).

2. **`ng add @angular-eslint/schematics` installs `angular-eslint` (not `@angular-eslint/schematics`)**
   - With CLI v21, the package that gets installed is `angular-eslint@21.3.1` (the unified package), not the older `@angular-eslint/schematics` scoped package.
   - The command `ng add @angular-eslint/schematics` still works (the alias resolves correctly), but the exercise should note this version difference.
   - Previously (with CLI v14), running `ng add @angular-eslint/schematics` would resolve to `@angular-eslint/schematics@1.0.0` (incompatible), partially modifying `package.json` before failing.

3. **Generated file names use short naming convention**
   - Angular 21 generates: `app.ts`, `app.html`, `app.spec.ts`, `app.scss`, `app.config.ts`, `app.routes.ts`
   - Older Angular generated: `app.component.ts`, `app.component.html`, etc.
   - The `app-routes.ts` name mentioned in Exercise 1.1 (Step 9) is also wrong: Angular 21 generates `app.routes.ts` (dot separator, not hyphen).

4. **`ng serve -o` cannot open a browser on Linux without a desktop environment**
   - The `-o` flag attempts to open `http://localhost:4200` in a browser.
   - On a headless Linux VM this silently fails; the dev server still starts correctly.
   - Students on a Windows VM will see Chrome open automatically as expected.

### Verified Working

- `ng new FlySharp --style=scss --ssr=false` → succeeds, no errors
- `ng add @angular-eslint/schematics --skip-confirmation` → succeeds, installs `angular-eslint@21.3.1`
- `ng build` → succeeds with exit code 0 (no errors, only Bootstrap Sass deprecation warnings if Bootstrap is added)


## Exercise 1.1: Developing an Angular Application

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/014%20Ex1.1.html

### Issues / Differences

1. **Step 9: File list — `app-routes.ts` should be `app.routes.ts`**
   - Exercise lists the file as `app-routes.ts` (hyphen before `routes`).
   - Angular 21 generates `app.routes.ts` (dot separator). Minor typo in the exercise.

2. **Step 11: References `app.component.ts` — should be `app.ts`**
   - Exercise says "Open `app.component.ts`" but the file is `app.ts` in Angular 21.
   - The exercise has been partially updated (Step 9 correctly lists `app.ts`) but Step 11 still uses the old name.

3. **Step 22: `ng test` uses Vitest, not Karma**
   - Exercise implies a Karma browser window opens showing test results.
   - Angular 21 uses **Vitest** — tests run headlessly in the terminal, no browser window.
   - Output format differs: Vitest shows coloured pass/fail in the terminal.

4. **Step 24: "Three instances of 'FlySharp'" — there is only ONE**
   - Exercise says to change "all three instances of `'FlySharp'`" in `app.spec.ts`.
   - Angular 21's generated spec contains only **one** instance: `toContain('Hello, FlySharp')`.
   - The fix is: change `'Hello, FlySharp'` → `'Fly Sharp'` (both replacing the name and removing `Hello, `).

5. **Step 24: "Remove Hello, text near line 21"**
   - The generated spec has `toContain('Hello, FlySharp')` at line 21.
   - After the template change (Step 18), the `h1` renders ` Fly Sharp ` with no "Hello,".
   - Correct fix: change the `toContain` argument from `'Hello, FlySharp'` to `'Fly Sharp'`.

6. **Step 18: Template uses `{{title()}}` not `{{title}}`**
   - Because `title` is an Angular Signal (`signal('Fly Sharp')`), it must be invoked as `title()` in the template.
   - The exercise correctly shows `{{title()}}` — this is correct for Angular 21.

7. **`RouterOutlet` import becomes unused after replacing the template**
   - The generated `app.ts` imports `RouterOutlet` (used in the default template's `<router-outlet />`).
   - After replacing `app.html` with the simple `<div class='content'>` template, `RouterOutlet` is no longer used, triggering a lint warning (`All imports are unused`).
   - Students should either remove the `RouterOutlet` import from `app.ts`, or keep `<router-outlet />` in the template. The exercise doesn't mention this.

8. **`app.config.ts` includes `provideBrowserGlobalErrorListeners()` — new in Angular 21**
   - The exercise (Step 10) describes `app.config.ts` as having "change detection and routing" configuration.
   - Angular 21 generates an additional provider: `provideBrowserGlobalErrorListeners()` from `@angular/core`.
   - This is not mentioned in the exercise. It captures unhandled browser errors — a new Angular 21 feature.

### Verified Working

- `app.ts` title changed from `signal('FlySharp')` to `signal('Fly Sharp')` ✓
- `app.html` replaced with `<div class='content'><h1>{{title()}}</h1>...</div>` ✓
- `ng test --watch=false` → **2 passed** after spec fix ✓

---

## Exercise 2.1: Creating an Angular Component

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/024%20Ex2.1.html

### Issues / Differences

1. **Step 3: File is now correctly named `home.ts` (exercise updated)**
   - The exercise now correctly says to create `home.ts`, matching Angular 21's short naming convention.
   - Import path in `app.ts` is `'./home/home'` (not `'./home/home.component'`).

2. **Step 6: `standalone: true` is redundant in Angular 19+**
   - Exercise instructs adding `standalone: true` to the `@Component` decorator.
   - In Angular 19+, components are standalone by default; the property is no longer needed.
   - Harmless to include; the exercise correctly shows it for teaching purposes.

3. **`RouterOutlet` unused warning**
   - `app.ts` imports `RouterOutlet` but our simplified `app.html` has no `<router-outlet>`.
   - Angular compiler emits `NG8113: RouterOutlet is not used within the template of App`.
   - Non-breaking. Exercise doesn't mention it.

4. **Bonus Step 17: AddIn `bootstrap.scss` must use `@import` not `@use`**
   - If `bootstrap.scss` uses Sass `@use` syntax, Bootstrap 5.3.x's internal `@import` chain creates a circular module dependency (`functions → variables → variables-dark → functions`), causing a fatal build error: `Module loop: this module is already being loaded.`
   - The AddIn has been fixed to use `@import` syntax, which works correctly (with deprecation warnings).

5. **Bonus Step 17: Bootstrap Sass deprecation warnings (non-blocking)**
   - After switching to `@import`, Bootstrap's SCSS produces ~277 deprecation warnings (deprecated `@import` rules, `darken()` etc.).
   - Build still **succeeds** (exit code 0) — warnings are non-blocking.
   - Exercise doesn't mention these; students may be alarmed.

6. **Bonus Step 17: `cpAddIns Ex2.1` must be run from the FlySharp project directory**
   - The script resolves paths relative to cwd. Must be run from `Exercises/FlySharp`.

### Verified Working

- `home/home.ts` created with `HomeComponent`, selector `app-home`, inline template ✓
- `app.html` updated: `<span>` replaced with `<app-home></app-home>` ✓
- `app.ts` updated: `HomeComponent` imported from `'./home/home'` and added to `imports` array ✓
- `bootstrap.scss` converted to `@import` syntax to fix module loop ✓
- `ng build` → succeeds (Bootstrap Sass deprecation warnings only) ✓

---

## Exercise 2.2: Displaying Repeating Data

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/026%20Ex%202.2.html

### Issues / Differences

1. **Step 4: `ng generate component BuyFlight` generates `buy-flight.ts`, not `buy-flight.component.ts`**
   - Angular 21 uses short naming: `buy-flight.ts`, `buy-flight.html`, `buy-flight.scss`, `buy-flight.spec.ts`.
   - Exercise Step 5 correctly says "Open `buy-flight.ts`", but Step 8 still says "Paste at end of `buy-flight.component.ts`" — inconsistency within the exercise.
   - Similarly Step 10 says "Open `buy-flight.component.html`" — should be `buy-flight.html`.
   - Class name generated is `BuyFlight` (not `BuyFlightComponent`).

2. **Steps 17/19: Mixed references to `app.component.html` and `app.ts`**
   - Step 17 says to add `<app-buy-flight>` to `app.component.html` — but Angular 21 uses `app.html`.
   - Step 19 correctly says "Add `BuyFlight` to imports array in `app.ts`" — `app.ts` is the right file in Angular 21.
   - The exercise is partially updated: template step still uses old name, imports step uses new name.

3. **`cpAddIns Ex2.2` correctly targets `app.html` when exStart preserves Angular 21 files**
   - When `exStart Ex2.2` copies from `Solutions/Ex2.1_Bonus` and preserves Angular 21 files, the AddIn correctly writes the navbar to `src/app/app.html` (used by `app.ts`).
   - No workaround needed if the exStart solution uses Angular 21 naming throughout.

4. **Bonus Steps 46-47: `table-condensed` is a Bootstrap 3 class, not Bootstrap 5**
   - Bootstrap 5 does not have `table-condensed`; the equivalent is `table-sm`.
   - Using `table-condensed` has no effect (silently ignored) with Bootstrap 5.3.x.
   - `table-responsive` in Bootstrap 5 should be on a wrapping `<div>`, not the `<table>` itself.

5. **Bonus Steps 37-45: Exercise references `app.component.html`/`app.component.ts` — should be `app.html`/`app.ts`**
   - The bonus navbar steps still use the old file names.
   - In Angular 21, these changes go into `app.html` and `app.ts`.

6. **Bonus Steps 46-47: `table-condensed` is a Bootstrap 3 class, not Bootstrap 5**
   - Bootstrap 5 does not have `table-condensed`; the equivalent is `table-sm`.
   - Using `table-condensed` has no effect (silently ignored) with Bootstrap 5.3.x.
   - `table-responsive` in Bootstrap 5 should be on a wrapping `<div>`, not the `<table>` itself.

### Verified Working

- `ng generate component BuyFlight` → generates `buy-flight.ts` with class `BuyFlight` ✓
- `cpAddIns Ex2.2` → copies `flights.txt` and updates `app.html` with navbar ✓
- `FLIGHTS` const + `flights` and `showBuyFlights` fields added to `buy-flight.ts` ✓
- `buy-flight.html` built with `@if`, `@for`, `<thead>`, CSS classes, method-based toggle link ✓
- `app.html` updated with `<app-buy-flight>`, `(click)="toggleNavbar()"`, `[ngClass]="{ 'show': navbarOpen }"` ✓
- `app.ts` imports `BuyFlight` and `NgClass`; `navbarOpen`/`toggleNavbar()` added ✓
- `ng build` → succeeds (Bootstrap Sass deprecation warnings only) ✓

---

## Exercise 3.1: Injecting a Service

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/035%20Ex%203.1.html

### Issues / Differences

1. **Step 9: Still references `application-state.service.ts` — should be `application-state.ts`**
   - Exercise Steps 5, 6, 15 have been updated to use Angular 21 short naming (`application-state.ts`, `buy-flight.ts`, `ApplicationState`).
   - Step 9 still says "Return to `application-state.service.ts`" — this is a remaining inconsistency.

2. **Generated class name is `ApplicationState` (no `Service` suffix) — exercise now correctly uses this**
   - Steps 16 now correctly says `ApplicationState` (previously said `ApplicationStateService`).
   - Import path is `'../application-state/application-state'`.

3. **No constructor is generated — nothing to delete**
   - Angular 21 generates the service with no constructor. The exercise no longer mentions deleting one.

4. **Steps 17-18: Constructor injection still works; `inject()` function is the Angular 19+ preferred alternative**
   - `constructor(private stateService: ApplicationState) {}` compiles and works correctly.
   - Angular 19+ introduced the `inject()` function as a preferred alternative, but constructor injection remains fully supported.

### Verified Working

- `ng generate service ApplicationState --flat=false` → generates `application-state.ts` with class `ApplicationState` ✓
- `cpAddIns Ex3.1` → populates `src/app/model/` with `flight.ts` and `mock-flights.ts` ✓
- `application-state.ts` updated with `_flights`, `flights` getter, `myFlights` getter ✓
- `buy-flight.ts` updated: constructor injects `ApplicationState`, `flights` getter delegates to service, `showBuyFlights = true`, old `FLIGHTS` const removed ✓
- `ng build` → succeeds (Bootstrap Sass deprecation warnings only) ✓

---

## Exercise 4.1: Implementing Input Bindings

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/042%20Ex%204.1.html

### Issues / Differences

1. **Step 4: `ng generate component Payment` generates `payment.ts`, not `payment.component.ts`**
   - Angular 21 short naming: `payment.ts`, `payment.html`, `payment.scss`, `payment.spec.ts`.
   - Exercise Steps 6 and 8 now correctly reference `payment.html` and `payment.ts` (exercise updated).
   - Generated class name is `Payment` (not `PaymentComponent`).

2. **Step 5: AddIn file is now `payment.html.txt` (previously `payment.component.html.txt`)**
   - Exercise updated to match Angular 21 naming.

3. **Step 16: Exercise shows `PaymentComponent` in imports snippet — should be `Payment`**
   - The class generated is `Payment`; the exercise snippet still uses the old `PaymentComponent` name.
   - Also shows `standalone: true` which is redundant in Angular 19+.

4. **Step 25: Linter warning about `?.` inside `@if` block**
   - Safe navigation operators (`?.`) generate linter warnings inside `@if` blocks because the type is narrowed — guaranteed non-null/undefined within the block.
   - Replace `?.` with `.` once content is wrapped in `@if (selectedFlight)`.

### Verified Working

- `ng generate component Payment` → generates `payment.ts` with class `Payment` ✓
- `cpAddIns Ex4.1` → copies `payment.html.txt` with Bootstrap grid layout ✓
- `payment.html` updated with `@if (selectedFlight)` wrapper, interpolation using `.` (not `?.`) ✓
- `payment.ts` updated with `@Input() selectedFlight: Flight | undefined` ✓
- `buy-flight.ts` imports `Payment`, adds `selectedFlight` field and `onFlightClick()` method ✓
- `buy-flight.html` adds Buy button column, empty `<th>`, `<app-payment [selectedFlight]="selectedFlight">` ✓
- `ng build` → succeeds (Bootstrap Sass deprecation warnings only) ✓
- **Bonus**: `payment.ts` refactored to `@Input()` getter/setter with `_selectedFlight` backing field ✓

---

## Exercise 4.2: Event Handling

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/044%20Ex%204.2.html

### Issues / Differences

1. **Step 4: `ng generate component FlightFilter` generates `flight-filter.ts`, not `flight-filter.component.ts`**
   - Angular 21 short naming: `flight-filter.ts`, `flight-filter.html` etc.
   - Exercise Steps 5, 6, 9 reference `flight-filter.component.html`/`.ts` — use `flight-filter.html`/`.ts`.
   - Generated class name is `FlightFilter` (not `FlightFilterComponent`).

2. **Steps 10-12: Exercise references `buy-flight.component.ts`/`.html` and `FlightFilterComponent` — all Angular 21 names differ**
   - Import is `FlightFilter` from `'../flight-filter/flight-filter'`.
   - Template file is `buy-flight.html`.

3. **Steps 14-15: `application-state.service.ts` → `application-state.ts`**
   - The exercise adds a `constructor()` + `loadFlights()` method to the service.
   - Angular 21 generates no constructor, consistent with previous exercise findings.

4. **Step 15: Constructor injection in service is fine; `inject()` preferred in Angular 19+**
   - The service constructor here takes no arguments, so no DI difference.

### Verified Working

- `ng generate component FlightFilter` → generates `flight-filter.ts` with class `FlightFilter` ✓
- `flight-filter.html` → filter label + `<input #filter (keyup.enter)="onFilterEnter(filter.value)">` ✓
- `flight-filter.ts` → `@Output() filterEmitter`, `onFilterEnter()` emitting uppercased value ✓
- `application-state.ts` → `_flights = new Array<Flight>()`, `loadFlights()`, constructor ✓
- `buy-flight.ts` → imports `FlightFilter`, `originFilter`, `onOriginFilterChange()`, filtered `flights` getter, `originDestinationFilter()` ✓
- `buy-flight.html` → `<app-flight-filter (filterEmitter)="onOriginFilterChange($event)">` inside `@if` block ✓
- `ng build` → succeeds (Bootstrap Sass deprecation warnings only) ✓
- **Bonus Step 19**: `keyup.enter` → `keyup` for per-keystroke filtering ✓
- **Bonus Steps 20-22**: `@Input() label` added to `FlightFilter`; template uses `{{label}}`; parent binds `[label]="'Origin'"` ✓
- **Bonus Steps 23-24**: Second `<app-flight-filter [label]="'Destination'">` added; `destinationFilter`/`onDestinationFilterChange()` added; `originDestinationFilter()` updated for dual filtering ✓


## Exercise 5.1: Integrating the Component Router

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/052%20Ex%205.1.html

### Issues / Differences

1. **Steps 1-2: Generated components use short naming**
   - `ng generate component Account` → `account.ts`, class `Account` (not `AccountComponent`)
   - `ng generate component MyFlights` → `my-flights.ts`, class `MyFlights` (not `MyFlightsComponent`)
   - Exercise route snippets now correctly use `Home`, `BuyFlight`, `MyFlights`, `Account` (exercise updated).

2. **Step 5: Route file correctly named `app.routes.ts` in exercise (updated)**
   - Exercise now references `app.routes.ts`. Previously said `app-routes.ts`.

3. **Steps 8-9: Template and component files correctly named `app.html`/`app.ts` (updated)**
   - Exercise now references `app.html` and `app.ts`. No remaining file-naming issues here.

4. **Step 10: Add `RouterLinkActive` at the same time as `RouterLink`**
   - Exercise mentions `RouterLink` at step 10, then `routerLinkActive` at step 14 — cleaner to import both together.
   - `HomeComponent` and `BuyFlight` can be removed from `app.ts` imports since they're no longer in the template.

5. **Step 12: Still references `app-routing.module.ts` — should be `app.routes.ts`**
   - Exercise step 12 (default redirect) says "In `app-routing.module.ts`" — this is the only remaining old reference.

6. **Step 12: Default redirect can be added with initial routes rather than as a separate step**

### Verified Working

- `ng generate component Account` → `account.ts` / `Account` ✓
- `ng generate component MyFlights` → `my-flights.ts` / `MyFlights` ✓
- `app.routes.ts` updated with all routes + default redirect, using Angular 21 class names ✓
- `app.html` updated: `routerLink`, `routerLinkActive="active"` on `<li>`, `<router-outlet>` replacing component elements ✓
- `app.ts` updated: `RouterLink`, `RouterLinkActive`, `RouterOutlet` in imports; `HomeComponent`/`BuyFlight` removed ✓
- `ng build` → succeeds (Bootstrap Sass deprecation warnings only) ✓
- **Bonus Step 17**: `{ path: 'buy/:origin' }` route added; `BuyFlight` injects `ActivatedRoute`, reads `origin` param in constructor and assigns to `originFilter` if present ✓


## Exercise 5.2: Creating a Feature Module

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/053%20Ex%205.2.html

### Issues / Differences

1. **Step 2: `standalone` is implicit (true) in Angular 21 — must explicitly set `standalone: false`**
   - In Angular 21, components are standalone by default; there is no `standalone: true` in generated code.
   - To move a component into an NgModule, add `standalone: false` explicitly and remove the `imports: []` array.
   - Exercise says "adding `standalone: true`" — this is a typo; it should be `standalone: false`.

2. **Step 6: Exercise uses `AccountComponent` but Angular 21 class is `Account`**
   - The route snippet in step 6 references `AccountComponent`; the correct Angular 21 class name is `Account`.
   - Import path is `'../account/account'` (short filename, no `.component.`).

### Verified Working

- `ng generate module accounts --routing=true` → `accounts-module.ts` / `AccountsModule` ✓
- `account.ts` updated: `standalone: false`, `imports[]` removed ✓
- `accounts-module.ts` updated: `Account` in `declarations[]` ✓
- `app.routes.ts` updated: `account` path uses `loadChildren` with dynamic `import()` ✓
- `accounts-routing-module.ts` updated: `Account` route at `path: ''` ✓
- **Bonus steps 8-10**: Browser/DevTools verification — chunk file loads on Account tab click ✓ (manual)
- **Bonus steps 11-16**: `MyFlightsWrapper` component wraps `MyFlights` with `@defer (on hover)` / `@placeholder (minimum 2000ms)`; `myflights` route points to `MyFlightsWrapper` ✓
  - Note: `minimum` duration belongs on `@placeholder`, not `@defer`
- `ng build` → succeeds (Bootstrap Sass deprecation warnings only) ✓


## Exercise 5.3: Creating a Custom Pipe

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/055%20Ex%205.3.html

### Issues / Differences

1. **Step 3: `ng generate pipe` generates `currency-conversion-pipe.ts` (not `currency-conversion.pipe.ts`)**
   - Angular 21 short naming: `currency-conversion-pipe.ts`, class `CurrencyConversionPipe`
   - Import path: `'../currency-conversion/currency-conversion-pipe'`

2. **Steps 6 and 11: Exercise says `BuyFlightComponent` — Angular 21 class is `BuyFlight`**
   - Step 6 says "add `CurrencyConversionPipe` to the `BuyFlightComponent` `imports`" — class is `BuyFlight`
   - Step 11 says "Add get methods to the `BuyFlightComponent` class" — class is `BuyFlight`

3. **Steps 13-15: Manual browser verification steps — no code changes**
   - Change `displayCurrency` to `this.currencies[1]` to verify pipe works with USD, then restore as desired

### Verified Working

- `ng generate pipe currencyConversion --flat=false` → `currency-conversion-pipe.ts` / `CurrencyConversionPipe` ✓
- `cpAddIns Ex5.3` → copies `src/app/model/currency.ts` ✓
- `currency-conversion-pipe.ts`: `transform(value: number, symbol: string = '£', rate: number = 0.9): string` returning `symbol + (value * rate).toFixed(2)` ✓
- `buy-flight.ts`: `CurrencyConversionPipe` imported from `'../currency-conversion/currency-conversion-pipe'`, added to `imports[]`; `currencySymbol` and `currencyRate` getters added ✓
- `buy-flight.html`: price cell uses `{{flight.price | currencyConversion : currencySymbol : currencyRate}}` ✓
- `application-state.ts`: `Currency` imported from `'../model/currency'`; `currencies[]` array and `displayCurrency` property added ✓
- **Bonus step 16**: `CurrencySelector` component created with `ApplicationState` as public `state` field, `@Input()` getter/setter for `currency`, and `currencyChange(currCode: string)` method; template uses `<select>` with `@for` options and `[value]`/`[selected]` bindings; added to `app.html` inside `<nav>` and `app.ts` imports ✓
  - Exercise says `CurrencySelectorComponent` / `ApplicationStateService` — Angular 21: `CurrencySelector` / `ApplicationState`
- `ng build` → succeeds (Bootstrap Sass deprecation warnings only) ✓


## Exercise 6.1: Unit Testing

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/063%20Ex6.1.html

### Issues / Differences

1. **Step 5: No `xit` tests to rename — Angular 21 generates `it` directly**
   - Exercise expects three `xit` tests in `app.component.spec.ts` to rename to `it`
   - Angular 21 generates `app.spec.ts` with `it` tests already (no `xit`)

2. **Exercise references old file names throughout**
   - `app.component.spec.ts` → `app.spec.ts`
   - `buy-flight.component.spec.ts` → `buy-flight.spec.ts`
   - `account.component.spec.ts` → `account.spec.ts`

3. **Exercise references old class names**
   - `AppComponent` → `App`
   - `BuyFlightComponent` → `BuyFlight`
   - `AccountComponent` → `Account`

4. **Step 13: `account.spec.ts` must use `declarations` (not `imports`) because `Account` is `standalone: false`**
   - `Account` was set to `standalone: false` in Ex5.2 when moved into `AccountsModule`
   - Using `declarations` is correct for NgModule-declared components

5. **Step 10: No `xit` to rename in `buy-flight.spec.ts` — already `it`**

6. **`ng test` uses Vitest (not Karma/Jasmine) in Angular 21**
   - `ng test --watch=false` runs tests once and exits

### Verified Working

- `app.spec.ts`: `provideRouter([])` added to providers; "should render title" replaced with "should have a `<router-outlet>`" test ✓
- `buy-flight.spec.ts`: `provideRouter([])` added; `DebugElement`/`By` imported; 4 new tests added (`showBuyFlights` default, toggle once, toggle twice, link click) ✓
- `account.spec.ts`: `imports` changed to `declarations` ✓
- `ng test --watch=false` → 16 tests pass across 10 test files ✓
- **Bonus steps 29–36**: DOM test added to `buy-flight.spec.ts` — verifies table hidden after link click using `fixture.detectChanges()`, `By.css('table')`, and `triggerEventHandler` ✓
- **Bonus steps 37–39**: `stateServiceStub` mock added (type `Partial<ApplicationState>`) with `FLIGHTS` and USD `displayCurrency`; provided via `{ provide: ApplicationState, useValue: stateServiceStub }`; `'should have a currency symbol of $'` test added ✓
  - Exercise uses `ApplicationStateService` / `BuyFlightComponent` — Angular 21: `ApplicationState` / `BuyFlight`
- **Bonus steps 41–43**: `stateServiceStub` replaced with inline object; `flightsSpy: any = vi.fn().mockReturnValue(FLIGHTS)` created in `beforeEach`; `flights` defined as object-literal getter `get flights() { return flightsSpy(); }` so component's `.filter()` works; `import { vi } from 'vitest'` added; new test asserts `component.flights` equals `FLIGHTS` and `flightsSpy` was called ✓
  - `vi.fn()` return type is `Mock<...>` — declare `flightsSpy: any` to avoid TypeScript callable error
- `ng test --watch=false` → 18 tests pass across 10 test files ✓


## Practice 6.1: Mocking with Jasmine Spy

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/061%20Practice6.1.html

### Issues / Differences

1. **DoNows uses Vitest, not Jasmine — `jasmine.createSpyObj` does not exist**
   - TODO 1: `jasmine.createSpyObj('Weather', ['getForecast'])` → `{ getForecast: vi.fn() }` (import `vi` from `'vitest'`)
   - TODO 5: `.and.callFake((city) => ...)` → `.mockImplementation((city) => ...)`
   - `toHaveBeenCalled()` / `toHaveBeenCalledWith()` are compatible — no change needed

2. **`ng test` project name is case-sensitive**
   - Correct command: `ng test DoNow61` (not `do-now61`)
   - `--watch=false` flag is not supported in this workspace; omit it (Vitest exits after one run)

### Verified Working

- `current-weather.spec.ts`: all 5 TODOs implemented with Vitest equivalents ✓
- `ng test DoNow61` → 8 tests pass across 3 files ✓

---

## Ex6.2: Cypress E2E Testing

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/068%20Ex6.2.html

### Steps Completed

1. Installed Cypress via `ng add @cypress/schematic --skip-confirmation`
2. Modified `cypress/e2e/spec.cy.ts` — "Home Page Test" with 2 tests (home page loads, h1 contains Special Offer text)
3. Created `cypress/e2e/nav.cy.ts` — "Navigation between pages of FlySharp App" with 6 tests

### Issues / Differences

1. **`ng add @cypress/schematic` requires terminal confirmation**
   - Fix: `printf "Y\nN\n" | ng add @cypress/schematic --skip-confirmation`

2. **Steps 4–7 (running Cypress GUI) are manual browser steps**
   - Run `ng e2e` from the FlySharp directory to launch Cypress
   - Select Chrome, then run the test specs from the Cypress UI

### Test Files

- `cypress/e2e/spec.cy.ts`: Home page loads, h1 Special Offer text
- `cypress/e2e/nav.cy.ts`: 6 nav tests — home, 4 nav links, buy flights page, 5 table rows, my flights page, account page

### Manual Verification Required

- Steps 4–7 and step 25: run `ng e2e` to open Cypress browser runner and verify tests pass visually

### Issues / Differences (updated)

3. **`table tbody tr` selector returns 0 rows even though rows are visible**
   - Angular's `@for` block inserts `<tr>` elements directly into `<table>` via DOM API (not HTML parsing), so no implicit `<tbody>` is created
   - Fix: add explicit `<tbody>` tags wrapping the `@for` block in `buy-flight.html`

### Verified Working

- `spec.cy.ts`: 2 tests pass (home page loads, h1 Special Offer text) ✓
- `nav.cy.ts`: 6 tests pass (home, 4 nav links, buy flights page, 5 table rows, my flights, account) ✓
- All 8 Cypress tests pass headless with `npx cypress run --browser electron` ✓

## Ex7.1: Template-Driven Forms

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/075%20Ex7.1.html

### Steps Completed

- Steps 5–7: Added `FormsModule` to `payment.ts` imports; added `model` field (`PaymentModel`) and `jsonModel` getter
- Steps 8–10: Appended form HTML from `payment.html.txt` inside the `@if` block; added `ngModel` bindings on all fields; added `{{jsonModel}}` debug output
- Steps 12–13: Added `required` to all inputs/textarea/select; disabled submit with `[disabled]="!paymentForm.form.valid"`
- Steps 15–16: Added `(ngSubmit)="onSubmit()"` to form tag; added `onSubmit()` method with `alert(this.jsonModel)`
- Steps 18–22 (Bonus): Added `FlightPaymentEvent` class to `payment.ts`; added `@Output() paymentConfirmed` emitter; `onSubmit()` emits event instead of alert; `BuyFlight.flightPurchased()` calls `addMyFlight()` and navigates to `/myflights`; `buy-flight.html` binds `(paymentConfirmed)="flightPurchased($event)"`

### Issues / Differences

1. **Model class is `PaymentModel`, not `Payment`** — exercise step 6 says `model: Payment = new Payment()`, but `cpAddIns` provides `PaymentModel` from `model/payment.ts` to avoid a naming clash with the `Payment` component class
   - Fix: use `model: PaymentModel = new PaymentModel()` and import `PaymentModel` from `'../model/payment'`

2. **`payment.component.html.txt` leftover in payment folder** — `exStart` copies this old-naming file alongside the new `payment.html.txt`; it is harmless but may confuse students looking for the AddIn file
   - The exercise step correctly references `payment.html.txt` (new name)

3. **Stray `1` at end of `my-flights.spec.ts`** — line 26 contains a bare `1` character; does not affect tests but should be removed from the AddIn

### Verified Working

- `ng build` → no errors ✓
- `ng test --watch=false` → 20 tests pass across 10 files ✓ (including bonus)


## Ex7.2: Reactive Forms

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/076%20Ex%207.2.html

### Steps Completed

- Step 4: Replaced `FormsModule` with `ReactiveFormsModule` in `payment.ts`
- Steps 5–6: Created `payForm = new FormGroup({...})` with `FormControl` for all 6 fields, each with `nonNullable: true` and `Validators.required`
- Steps 7–12: Updated `payment.html` — `[formGroup]="payForm"`, `[disabled]="!payForm.valid"`, removed `required`/`ngModel`/`name=`, added `formControlName=`, replaced `{{jsonModel}}` with `{{ payForm.value | json }}`
- Step 13: Added `JsonPipe` to component `imports`
- Steps 15–18: Added `buildSampleModel()`, `ngOnInit()`, and `payForm.setValue(this.model)`
- Step 20: `onSubmit()` emits `payForm.value as PaymentModel`
- Step 21: Email validation feedback div using `@if (!payForm.controls.email.valid)`
- Steps 23/25–26 (Bonus): `minLength(5)` on name; `minLength(10)/maxLength(128)` on address; `minLength(13)` on cardNum; email regex pattern validator

### Issues / Differences

1. **No `AddIns/Ex7.2` directory** — `cpAddIns Ex7.2` fails with ENOENT; this is expected, no AddIns needed for this exercise

2. **`exStart Ex7.2` sources from `Solutions/Ex7.1_Bonus_1`** — starting state is the completed Ex7.1 Bonus (template-driven form with `FlightPaymentEvent`); students need to replace `FormsModule` with `ReactiveFormsModule` as step 4 instructs

### Verified Working

- `ng build` → no errors ✓
- `ng test --watch=false` → 20 tests pass across 10 files ✓


## Ex8.1: Communicating With a REST Server

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/085%20Ex%208.1.html

### Steps Completed

- Step 4: `ng generate service flights/flights --flat` generates `flights.ts`/`Flights` — AddIns now use Angular 21 naming so this works directly; manually created `flights.ts` to avoid spec file conflict from AddIn pre-populating it
- Steps 7 & 13: Uncommented both test blocks in `flights.spec.ts`; fixed `fail()` to `{ throw new Error(...); }`
- Steps 9–12: Implemented `Flights` with `HttpClient`, `getAllFlights()`, `handleError()` with `catchError`/`throwError`
- Step 10: Added `provideHttpClient()` to `app.config.ts` providers
- Steps 14–17: Added `getMyFlights()` (GET to `/myflights`)
- Steps 19–21: Updated `ApplicationState` to inject `Flights`, added `error` property, async `loadFlights()`
- Steps 22–24: Added `errorMessage` getter to `BuyFlight`; `@if(errorMessage)` error display in template
- Steps 25–28: Server-dependent steps (run app, stop/start Flights Service) — not automatable; verified via build

### Issues / Differences

1. **`ng generate service` conflicts with AddIn pre-placed spec file**
   - `cpAddIns Ex8.1` places `flights.spec.ts` before code generation, so `ng generate` would overwrite it
   - Fix: create `flights.ts` manually without running `ng generate`

2. **`fail()` is Jasmine-only — not available in Vitest**
   - AddIn spec uses `fail("An error should have been thrown")` inside subscribe `next` callbacks
   - Fix: replace with block form `{ throw new Error("An error should have been thrown"); }` — arrow expression form (`() => throw ...`) is a syntax error

3. **`application-state.spec.ts` must be updated to mock `Flights`**
   - Old spec used sync mock data; `ApplicationState` now loads flights asynchronously via `Flights`
   - Fix: provide `{ provide: Flights, useValue: { getAllFlights: vi.fn().mockReturnValue(of(FLIGHTS)), getMyFlights: vi.fn().mockReturnValue(of([])), addMyFlight: vi.fn().mockReturnValue(of(1)) } }` in `TestBed`

### Verified Working (core steps)

- `ng build` → no errors ✓
- `ng test --watch=false` → 23 tests pass across 11 files ✓

### Bonus Steps (29–44)

- Steps 29–33: Added pagination to `BuyFlight` — `FLIGHTS_PER_PAGE=10` module-level const, `firstDisplayedFlightIndex`, `flightCount`, `flights` getter uses `slice()`, `onNext()`/`onPrevious()` methods, Previous/Next buttons in template
- Steps 36–41: `addMyFlight()` POST with `JSON.stringify([flight])` body and `HttpHeaders({'Content-Type':'application/json'})`; all 6 bonus tests uncommented with `throw` syntax fixes
- Steps 42–43: `ApplicationState.addMyFlight()` pushes to `_myFlights` then calls `flightsService.addMyFlight().subscribe({})`; `loadMyFlights()` called from constructor
- Step 44: Updated `application-state.spec.ts` mock to include `getMyFlights` and `addMyFlight` stubs

**AddIns (`Ex8.1_b1`) — issues:**
- `cpAddIns Ex8.1_b1` overwrites `application-state.spec.ts` with old `FlightsService`/`flights.service` references — fix both the import and the `provide:` token to use `Flights` from `'../flights/flights'`
- `cpAddIns Ex8.1_b1` places an `app.spec.ts` that calls `app.title()` directly — this fails if `title` is declared `protected` in `app.ts`; fix by removing `protected` from `readonly title = signal('Fly Sharp')`

**Verified Working (full exercise including bonus):**
- `ng build` → no errors ✓
- `ng test --watch=false` → 24 tests pass across 11 files ✓


## Ex8.2: WebSocket Communication

**Exercise URL**: https://adaptalearn.learningtree.com/Output/2324f1dev/087%20Ex%208.2.html

### Steps Completed

- Step 1: `exStart Ex8.2` — starts from `Solutions/Ex8.1_Bonus_2`
- Step 2: `cpAddIns Ex8.2` — copies `flight-status/` component skeleton, `flight-status-service/` spec (`.tsx`), and updated `home/home.ts`
- Step 3: `ng g s --flat=false FlightStatusService` — generates `flight-status-service.ts` + `flight-status-service.spec.ts`
- Step 4: Delete generated spec; rename `flight-status-service.spec.tsx` → `flight-status-service.spec.ts` (see Issue #1 for exercise wording discrepancy)
- Step 5: `ng test` — one compilation error: `Property 'connect' does not exist on type 'FlightStatusService'` ✓ (expected)
- Step 6: Implement `connect(url)` in `flight-status-service.ts` — returns `webSocket(url)` as `WebSocketSubject<any>`; import `{ webSocket, WebSocketSubject } from 'rxjs/webSocket'`
- Step 7: Remove the `// TODO remove the comment` comments from `flight-status.spec.ts` to re-enable the two signal assertions
- Step 8: `ng test` — service spec passes; component spec has 2 failures (DOM update and `next` not called — component not yet implemented, expected)
- Step 9: Implement `flight-status.ts` — inject `FlightStatusService` as constructor arg; in `ngOnInit` call `connect('ws://localhost:8081')` and assign to `this.socket`; redefine `flightStatus` as `toSignal()` signal (see Issue #2); call `socket.next({ airport: 'JFK' })`; update `flight-status.html` to `{{flightStatus()}}` (see Issue #3)
- Step 10: `ng test` — 32/32 pass ✓
- Step 11: Run app — manual step

### Issues / Differences

1. **Step 4 rename destination in exercise is wrong**
   - Exercise says rename to `src\app\flight-status\flights-status-service.spec.ts` — wrong directory (`flight-status` not `flight-status-service`) and typo (`flights-status`)
   - Correct target: `src/app/flight-status-service/flight-status-service.spec.ts`

2. **`flight-status.ts` requires `toSignal()` — exercise says "redefine as a signal" without specifying how**
   - Plain property binding doesn't update when WebSocket data arrives outside Angular zone
   - Use `toSignal(this.socket.asObservable(), { initialValue: '...' })` — must be a field initialiser (not inside `ngOnInit`) to stay in injection context
   - `socket` must also be a field initialiser for the same reason; `ngOnInit` only calls `socket.next()`

3. **Template must use signal call syntax `{{flightStatus()}}`**
   - `{{flightStatus}}` renders the signal object's `toString()` instead of its value
   - Exercise says "update `flight-status.html` to display `flightStatus` as a Signal" without stating the `()` syntax

### Verified Working

- `ng test --watch=false` → 32 tests pass across 13 files ✓
- Step 11 (run app) is a manual step

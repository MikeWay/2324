# Course Walk-Through Notes

## Environment

- **Angular CLI**: 21.2.7 (global, at `/usr/local/bin/ng` → symlinked to `/home/mjrw/n/bin/ng`)
- **Node.js**: v24.0.0
- **OS**: Linux (Ubuntu)
- TYPESCRIPT

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
- `ng test --watch=false` → 15 tests pass across 10 test files ✓

---

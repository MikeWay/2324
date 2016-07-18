import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { UpgradeAdapter } from '@angular/upgrade';

import { upgradeAdapter } from './upgrade_adapter';

//bootstrap(AppComponent);
//let upgradeAdapter = new UpgradeAdapter();
// Downgrade AppComponent to work as an A1 component
angular.module('container').directive('appComponent', upgradeAdapter.downgradeNg2Component(AppComponent));

upgradeAdapter.bootstrap(document.documentElement, ['container']);

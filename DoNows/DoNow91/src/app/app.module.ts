import { AppComponent } from './app.component';
import {PreferencesFormComponent} from "./preferences-form/preferences-form.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core/src/metadata/ng_module";

@NgModule({
  declarations: [
    AppComponent, PreferencesFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

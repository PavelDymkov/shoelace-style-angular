import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { ShoelaceStyleAngularModule } from "shoelace-style-angular";
// import { ShoelaceStyleFormModule } from "../../../shoelace-style-angular/src/lib/shoelace-style-form.module";
// import { ShoelaceStyleFocusableDirective } from "../../../shoelace-style-angular/src/lib/directives/shoelace-style-focusable.directive";
// import { ShoelaceStyleShowHideDirective } from "../../../shoelace-style-angular/src/lib/directives/shoelace-style-show-hide.directive";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FocusableComponent } from "./pages/focusable/focusable.component";
import { FormComponent } from "./pages/form/form.component";
import { ShowHideComponent } from "./pages/show-hide/show-hide.component";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,

        ShoelaceStyleAngularModule,
        // ShoelaceStyleFormModule,
    ],
    declarations: [
        AppComponent,
        FocusableComponent,
        FormComponent,
        ShowHideComponent,

        // ShoelaceStyleFocusableDirective,
        // ShoelaceStyleShowHideDirective,
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

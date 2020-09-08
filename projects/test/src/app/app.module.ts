import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

// import { ShoelaceStyleAngularModule } from "shoelace-style-angular";
import { ShoelaceStyleControlsDirective } from "../../../shoelace-style-angular/src/lib/directives/shoelace-style-controls.directive";
import { ShoelaceStyleFormGroupDirective } from "../../../shoelace-style-angular/src/lib/directives/shoelace-style-form-group.directive";
import { ShoelaceStyleFormDirective } from "../../../shoelace-style-angular/src/lib/directives/shoelace-style-form.directive";
import { ShoelaceStyleShowHideDirective } from "../../../shoelace-style-angular/src/lib/directives/shoelace-style-show-hide.directive";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ControlsDirectiveComponent } from "./pages/controls-directive/controls-directive.component";
import { FormComponent } from "./pages/form-directive/form.component";
import { ShowHideComponent } from "./pages/show-hide/show-hide.component";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,

        // ShoelaceStyleAngularModule,
    ],
    declarations: [
        AppComponent,
        ControlsDirectiveComponent,
        FormComponent,
        ShowHideComponent,

        ShoelaceStyleControlsDirective,
        ShoelaceStyleFormGroupDirective,
        ShoelaceStyleFormDirective,
        ShoelaceStyleShowHideDirective,
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

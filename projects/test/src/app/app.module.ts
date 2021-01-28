import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ClearableComponent } from "./pages/clearable/clearable.component";
import { ClosableComponent } from "./pages/closable/closable.component";
import { FocusableComponent } from "./pages/focusable/focusable.component";
import { FormComponent } from "./pages/form/form.component";
import { LoadComponent } from "./pages/load/load.component";
import { OverlayComponent } from "./pages/overlay/overlay.component";
import { ShowHideComponent } from "./pages/show-hide/show-hide.component";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,

        ShoelaceStyleAngularModule,
    ],
    declarations: [
        AppComponent,
        ClearableComponent,
        ClosableComponent,
        FocusableComponent,
        FormComponent,
        LoadComponent,
        OverlayComponent,
        ShowHideComponent,
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

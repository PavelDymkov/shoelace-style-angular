import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { routes } from "./app.routing";
import { AppComponent } from "./app.component";

import { AnimationComponent } from "./pages/animation/animation.component";
import { ChangeComponent } from "./pages/change/change.component";
import { ClearableComponent } from "./pages/clearable/clearable.component";
import { ClosableComponent } from "./pages/closable/closable.component";
import { FocusableComponent } from "./pages/focusable/focusable.component";
import { FormComponent } from "./pages/form/form.component";
import { GreeterComponent } from "./pages/greeter/greeter.component";
import { LoadComponent } from "./pages/load/load.component";
import { OpenComponent } from "./pages/open/open.component";
import { OverlayComponent } from "./pages/overlay/overlay.component";
import { ResizeComponent } from "./pages/resize/resize.component";
import { SelectComponent } from "./pages/select/select.component";
import { ShowHideComponent } from "./pages/show-hide/show-hide.component";
import { ValidationComponent } from "./pages/validation/validation.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(routes),
        ReactiveFormsModule,

        ShoelaceStyleAngularModule,
    ],
    declarations: [
        AppComponent,
        AnimationComponent,
        ChangeComponent,
        ClearableComponent,
        ClosableComponent,
        FocusableComponent,
        FormComponent,
        GreeterComponent,
        LoadComponent,
        OpenComponent,
        OverlayComponent,
        ResizeComponent,
        SelectComponent,
        ShowHideComponent,
        ValidationComponent,
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

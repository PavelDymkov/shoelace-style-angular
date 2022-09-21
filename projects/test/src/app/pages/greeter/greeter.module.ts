import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoelaceModule } from "shoelace-style-angular";
import { ShoelaceFormControlsModule } from "shoelace-style-angular/form-controls";

import { GreeterComponent } from "./greeter.component";

@NgModule({
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild([{ path: "", component: GreeterComponent }]),
        ShoelaceModule,
        ShoelaceFormControlsModule,
    ],
    declarations: [GreeterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GreeterPageModule {}

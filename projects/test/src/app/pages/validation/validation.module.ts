import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoelaceFormControlsModule } from "shoelace-style-angular/form-controls";

import { ValidationPageComponent } from "./validation.component";

@NgModule({
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: "", component: ValidationPageComponent },
        ]),
        ShoelaceFormControlsModule,
    ],
    declarations: [ValidationPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ValidationPageModule {}

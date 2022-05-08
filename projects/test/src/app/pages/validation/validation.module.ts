import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleModule } from "shoelace-style-angular";

import { ValidationPageComponent } from "./validation.component";

@NgModule({
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: "", component: ValidationPageComponent },
        ]),
        ShoelaceStyleModule,
    ],
    declarations: [ValidationPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ValidationPageModule {}

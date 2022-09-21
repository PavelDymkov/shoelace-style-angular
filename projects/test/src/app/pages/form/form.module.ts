import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoelaceFormControlsModule } from "shoelace-style-angular/form-controls";

import { FormPageComponent } from "./form.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([{ path: "", component: FormPageComponent }]),
        ShoelaceFormControlsModule,
    ],
    declarations: [FormPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormPageModule {}

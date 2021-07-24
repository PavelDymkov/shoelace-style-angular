import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { FormPageComponent } from "./form.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([{ path: "", component: FormPageComponent }]),
        ShoelaceStyleAngularModule,
    ],
    declarations: [FormPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormPageModule {}

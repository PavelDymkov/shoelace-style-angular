import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { AnimationPageComponent } from "./animation.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: "", component: AnimationPageComponent },
        ]),
        ShoelaceStyleAngularModule,
    ],
    declarations: [AnimationPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AnimationPageModule {}

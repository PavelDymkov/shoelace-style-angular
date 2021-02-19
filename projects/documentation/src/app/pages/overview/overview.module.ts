import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AboutComponent } from "./overview.component";
import { ExampleModule } from "../../components/example/example.module";
import { routes } from "./overview.routing";

import { ShoelaceStyleAngularModule } from "../../../../../shoelace-style-angular/src/public-api";

import { Example001 } from "../../examples/example-001";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ShoelaceStyleAngularModule,
        ExampleModule,
    ],
    exports: [AboutComponent],
    declarations: [AboutComponent, Example001],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OverviewModule {}

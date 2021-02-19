import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// @ts-ignore
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

import { routes } from "./overview.routing";
import { AboutComponent } from "./overview.component";
import { ExampleModule } from "../../components/example/example.module";

import { SimplyDialog } from "../../examples/example-001";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ShoelaceStyleAngularModule,
        ExampleModule,
    ],
    exports: [AboutComponent],
    declarations: [AboutComponent, SimplyDialog],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OverviewModule {}

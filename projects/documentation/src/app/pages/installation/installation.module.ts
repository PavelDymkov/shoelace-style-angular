import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { routes } from "./installation.routing";

import { InstallationComponent } from "./installation.component";

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [InstallationComponent],
    declarations: [InstallationComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InstallationModule {}

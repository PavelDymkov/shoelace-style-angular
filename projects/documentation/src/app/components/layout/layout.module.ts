import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LayoutComponent } from "./layout.component";
import { LogoComponent } from "./logo/logo.component";

@NgModule({
    imports: [RouterModule],
    exports: [LayoutComponent],
    declarations: [LayoutComponent, LogoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule {}

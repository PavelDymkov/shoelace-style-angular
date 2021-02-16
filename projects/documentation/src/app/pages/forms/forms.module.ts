import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FormsComponent } from "./forms.component";
import { routes } from "./forms.routing";

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [FormsComponent],
    declarations: [FormsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormsModule {}

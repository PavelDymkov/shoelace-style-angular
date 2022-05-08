import { NgModule } from "@angular/core";

import {
    AutofocusDirective,
    FormControlCheckable,
    FormControlColorPicker,
    FormControlInput,
    FormControlNumber,
    FormControlRadio,
    FormControlSelect,
    OpenDirective,
} from "./directives";

@NgModule({
    exports: [
        AutofocusDirective,
        FormControlCheckable,
        FormControlColorPicker,
        FormControlInput,
        FormControlNumber,
        FormControlRadio,
        FormControlSelect,
        OpenDirective,
    ],
    declarations: [
        AutofocusDirective,
        FormControlCheckable,
        FormControlColorPicker,
        FormControlInput,
        FormControlNumber,
        FormControlRadio,
        FormControlSelect,
        OpenDirective,
    ],
})
export class ShoelaceStyleModule {}

import { NgModule } from "@angular/core";

import {
    FormControlCheckable,
    FormControlColorPicker,
    FormControlInput,
    FormControlNumber,
    FormControlRadio,
    FormControlSelect,
} from "./directives";

export * from "./directives";

@NgModule({
    exports: [
        FormControlCheckable,
        FormControlColorPicker,
        FormControlInput,
        FormControlNumber,
        FormControlRadio,
        FormControlSelect,
    ],
    declarations: [
        FormControlCheckable,
        FormControlColorPicker,
        FormControlInput,
        FormControlNumber,
        FormControlRadio,
        FormControlSelect,
    ],
})
export class ShoelaceFormControlsModule {}

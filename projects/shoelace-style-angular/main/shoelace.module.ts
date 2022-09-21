import { NgModule } from "@angular/core";

import {
    AutofocusDirective,
    OpenableDirective,
    OpenableExtendedDirective,
    OpenDirective,
} from "./directives";

export * from "./directives";

@NgModule({
    exports: [
        AutofocusDirective,
        OpenableDirective,
        OpenableExtendedDirective,
        OpenDirective,
    ],
    declarations: [
        AutofocusDirective,
        OpenableDirective,
        OpenableExtendedDirective,
        OpenDirective,
    ],
})
export class ShoelaceModule {}

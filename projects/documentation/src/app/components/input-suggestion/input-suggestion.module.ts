import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { InputSuggestionComponent } from "./input-suggestion.component";

@NgModule({
    exports: [InputSuggestionComponent],
    declarations: [InputSuggestionComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InputSuggestionModule {}
